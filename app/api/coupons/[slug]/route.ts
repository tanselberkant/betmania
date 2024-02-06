import { NextRequest, NextResponse } from 'next/server';
import { Coupon } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';

// Params için bir tip tanımı

export const GET = async (
  request: NextRequest,
  { params }: { params: any }
) => {
  const id = params.slug;

  try {
    await connectToDb();
    const coupon = await Coupon.findOne({ _id: id });
    return NextResponse.json(coupon);
  } catch (err) {
    console.log(err);
    return new NextResponse('Failed to fetch post!', { status: 500 });
  }
};

export async function POST(req: NextRequest) {}
