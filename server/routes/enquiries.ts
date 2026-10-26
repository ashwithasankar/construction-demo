/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Router, Request, Response } from 'express';
import { saveEnquiryToDb, isDbConnected, getDbError } from '../db.ts';

export const enquiriesRouter = Router();

// In-memory rate limiting tracker (max 5 requests per IP every 10 minutes)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }

  if (record.count >= 5) {
    return false;
  }

  record.count += 1;
  return true;
}

// GET /api/enquiries/status
enquiriesRouter.get('/status', (req: Request, res: Response) => {
  const connected = isDbConnected();
  res.json({
    status: 'online',
    databaseConnected: connected,
    notice: connected
      ? 'MongoDB database is actively connected.'
      : 'MongoDB is unconfigured or offline. WhatsApp direct fallback is ready.',
    error: connected ? null : getDbError(),
    companyPhone: '+919000000000'
  });
});

// POST /api/enquiries
enquiriesRouter.post('/', async (req: Request, res: Response) => {
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';

  // 1. Rate limiting check
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting again or reach out on WhatsApp (+91 90000 00000).'
    });
  }

  const {
    name,
    phone,
    email,
    projectType,
    location,
    requirements,
    honeypot, // Spam honeypot field
    renderedAt // Timestamp when form rendered
  } = req.body;

  // 2. Spam bot detection: Honeypot field must be empty
  if (honeypot && honeypot.trim() !== '') {
    // Silently reject spam bots with generic acceptance without storing
    return res.status(200).json({
      success: true,
      message: 'Enquiry received.'
    });
  }

  // 3. Spam bot detection: Human form submission takes at least 1 second
  if (renderedAt && typeof renderedAt === 'number') {
    const elapsed = Date.now() - renderedAt;
    if (elapsed < 800) {
      return res.status(400).json({
        success: false,
        error: 'Form submission was too fast. Please verify you are human.'
      });
    }
  }

  // 4. Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Please enter your full name (minimum 2 characters).'
    });
  }

  const cleanPhone = (phone || '').toString().trim().replace(/[\s-]/g, '');
  // Indian phone validation: 10 digits or with +91 prefix
  const phonePattern = /^(\+91|91|0)?[6-9]\d{9}$/;
  if (!phonePattern.test(cleanPhone)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid 10-digit mobile number (e.g., 90000 00000).'
    });
  }

  if (email && typeof email === 'string' && email.trim() !== '') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address, or leave it blank.'
      });
    }
  }

  if (!projectType || typeof projectType !== 'string' || projectType.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Please select a project category.'
    });
  }

  if (!location || typeof location !== 'string' || location.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Please specify the project location or town.'
    });
  }

  if (!requirements || typeof requirements !== 'string' || requirements.trim().length < 5) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a brief summary of your project requirements (at least 5 characters).'
    });
  }

  // Construct WhatsApp fallback text
  const waText = encodeURIComponent(
    `Hello UrbanNest Team (UrbanNest Builders),\n\nI would like to enquire about a construction project.\n\n` +
    `• Name: ${name.trim()}\n` +
    `• Phone: ${cleanPhone}\n` +
    (email ? `• Email: ${email.trim()}\n` : '') +
    `• Project Type: ${projectType.trim()}\n` +
    `• Location: ${location.trim()}\n` +
    `• Requirements: ${requirements.trim()}`
  );
  const whatsappFallbackUrl = `https://wa.me/919000000000?text=${waText}`;

  // 5. Attempt MongoDB persistence
  const dbResult = await saveEnquiryToDb({
    name: name.trim(),
    phone: cleanPhone,
    email: email ? email.trim() : undefined,
    projectType: projectType.trim(),
    location: location.trim(),
    requirements: requirements.trim(),
    ipAddress: clientIp,
    userAgent: req.headers['user-agent']
  });

  if (!dbResult.success) {
    // Database unavailable: return 503 with exact explanation and WhatsApp alternative link
    return res.status(503).json({
      success: false,
      databaseOffline: true,
      error: dbResult.error || 'Database storage is currently offline.',
      whatsappFallbackUrl,
      message: 'The database is currently unconfigured or unreachable. You can immediately send your enquiry directly to UrbanNest Team via WhatsApp.'
    });
  }

  // Success response
  return res.status(201).json({
    success: true,
    id: dbResult.id,
    whatsappUrl: whatsappFallbackUrl,
    message: 'Thank you! Your project enquiry has been securely registered in the UrbanNest Builders system. UrbanNest Team will contact you shortly.'
  });
});
