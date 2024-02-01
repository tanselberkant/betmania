import { Coupon } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();

    const pageStr = request.nextUrl.searchParams.get('page');
    const advisorName = request.nextUrl.searchParams.get('advisorName');

    let page = pageStr ? parseInt(pageStr) : 1;
    let limit = parseInt(process.env.DEFAULT_LIMIT || '5');
    // let limit = 1;

    // Sayfa ve limit değerlerinin negatif veya sıfır olmadığından emin ol
    page = Math.max(page, 1);
    limit = Math.max(limit, 1);

    let query = {};
    if (advisorName) {
      query = { advisorName: advisorName };
    }

    const coupons = await Coupon.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json(coupons);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch coupons!');
  }
};
