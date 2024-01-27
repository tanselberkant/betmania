import { Tip } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { revalidatePath } from 'next/cache';
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

export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();
    // console.log(body);

    // Veritabanına bağlan
    await connectToDb();

    // Veritabanında güncelleme yap
    const updatedTable = await Tip.findByIdAndUpdate(
      body.id,
      { $set: { tips: body.tips } },
      { new: true } // Bu seçenek güncellenmiş dokümanı döndürür
    );

    revalidatePath('/', 'layout');
    revalidatePath('/admin');
    return NextResponse.json({
      success: true,
      message: 'Table updated successfully',
      updatedTable,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: 'Failed to update table',
    });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    // Veritabanına bağlan
    await connectToDb();

    // İstekten ID al
    const id = request.nextUrl.searchParams.get('id');

    // Veritabanında silme işlemi yap
    await Tip.findByIdAndDelete(id);

    revalidatePath('/', 'layout');
    revalidatePath('/admin');
    return NextResponse.json({
      success: true,
      message: 'Table deleted successfully',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: 'Failed to delete table',
    });
  }
};
