/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MongoClient, Db, Collection } from 'mongodb';

export interface EnquiryDocument {
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  location: string;
  requirements: string;
  submittedAt: Date;
  ipAddress?: string;
  userAgent?: string;
  status: 'new' | 'contacted' | 'archived';
}

let client: MongoClient | null = null;
let db: Db | null = null;
let enquiriesCollection: Collection<EnquiryDocument> | null = null;
let connectionAttempted = false;
let isConnected = false;
let lastError: string | null = null;

export async function initDatabase(): Promise<boolean> {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.trim() === '') {
    lastError = 'MONGODB_URI is not configured in environment variables.';
    console.warn('[MongoDB] Notice: MONGODB_URI not configured. Inquiries will prompt fallback to direct WhatsApp.');
    return false;
  }

  try {
    connectionAttempted = true;
    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 4000,
      connectTimeoutMS: 5000,
    });

    await client.connect();
    db = client.db('urbannest_builders');
    enquiriesCollection = db.collection<EnquiryDocument>('enquiries');
    isConnected = true;
    lastError = null;
    console.log('[MongoDB] Successfully connected to database: urbannest_builders');
    return true;
  } catch (err: any) {
    isConnected = false;
    lastError = err?.message || 'Failed to connect to MongoDB server.';
    console.error('[MongoDB] Connection error:', lastError);
    return false;
  }
}

export function isDbConnected(): boolean {
  return isConnected;
}

export function getDbError(): string | null {
  return lastError;
}

export async function saveEnquiryToDb(data: Omit<EnquiryDocument, 'submittedAt' | 'status'>): Promise<{ success: boolean; id?: string; error?: string }> {
  // If not yet connected and URI is present, attempt connection once
  if (!isConnected && process.env.MONGODB_URI && !connectionAttempted) {
    await initDatabase();
  }

  if (!isConnected || !enquiriesCollection) {
    return {
      success: false,
      error: lastError || 'MongoDB database is not available. Please submit your inquiry directly via WhatsApp (+91 90000 00000).'
    };
  }

  try {
    const doc: EnquiryDocument = {
      ...data,
      submittedAt: new Date(),
      status: 'new'
    };

    const result = await enquiriesCollection.insertOne(doc as any);
    return {
      success: true,
      id: result.insertedId.toString()
    };
  } catch (err: any) {
    console.error('[MongoDB] Insert error:', err);
    return {
      success: false,
      error: 'Failed to record inquiry into database: ' + (err?.message || 'Storage error')
    };
  }
}
