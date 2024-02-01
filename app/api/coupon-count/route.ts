import { Coupon } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();

    let limit = parseInt(process.env.DEFAULT_LIMIT || '5');
    // let limit = 1;

    // Veritabanındaki toplam kayıt sayısını bul
    const totalItems = await Coupon.countDocuments();

    // Toplam sayfa sayısını hesapla
    const totalPages = Math.ceil(totalItems / limit);

    // Sonuçları ve sayfalama bilgisini döndür
    return NextResponse.json(totalPages);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data!');
  }
};
