import { Coupon } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    connectToDb();
    const advisorName = request.nextUrl.searchParams.get('advisorName');
    let query = {};

    if (advisorName) {
      query = { advisorName: advisorName };
    }

    // const coupons = await Coupon.find(query);
    const coupons = await Coupon.find(query).sort({ createdAt: -1 });
    return NextResponse.json(coupons);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch coupons!');
  }
};
