import { Coupon } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();

    const pageStr = request.nextUrl.searchParams.get('page');

    let page = pageStr ? parseInt(pageStr) : 1;
    let limit = parseInt(process.env.DEFAULT_LIMIT || '5');

    page = Math.max(page, 1);
    limit = Math.max(limit, 1);

    const coupons = await Coupon.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json(coupons);
  } catch (err) {
    console.log('------>', err);
    throw new Error('Failed to fetch coupons!');
  }
};

export async function POST(req: NextRequest) {}
