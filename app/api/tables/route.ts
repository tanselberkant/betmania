import { Tip } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  // console.log('request--->', request);
  try {
    connectToDb();
    // const advisorName = request.nextUrl.searchParams.get('advisorName');
    // let query = {};

    // if (advisorName) {
    //   query = { advisorName: advisorName };
    // }

    // const tables = await Tip.find(query);
    const tables = await Tip.find();
    return NextResponse.json(tables);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch coupons!');
  }
};
