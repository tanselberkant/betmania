import { Subscriber } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();

    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    const total = await Subscriber.countDocuments();

    return NextResponse.json({ subscribers, total });
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch subscribers!');
  }
};
