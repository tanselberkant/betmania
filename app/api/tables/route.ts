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

    const tables = await Tip.find(query);
    return NextResponse.json(tables);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch tables!');
  }
};
