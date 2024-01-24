import { Tip } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    connectToDb();
    const id = request.nextUrl.searchParams.get('id');
    let query = {};

    if (id) {
      query = { _id: id };
    }

    // En yeni öğeleri en önce getir
    const tables = await Tip.find(query).sort({ createdAt: -1 });
    return NextResponse.json(tables);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch tables!');
  }
};
