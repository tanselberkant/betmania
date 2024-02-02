import { Tip } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { revalidatePath } from 'next/cache';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();

    const id = request.nextUrl.searchParams.get('id');
    if (id) {
      const table = await Tip.findById(id);
      return NextResponse.json(table);
    } else {
      // ID yoksa veya null ise, genel sorgu yapılacak

      const pageStr = request.nextUrl.searchParams.get('page');

      let page = pageStr ? parseInt(pageStr) : 1;
      let limit = parseInt(process.env.DEFAULT_LIMIT || '5');

      // Sayfa ve limit değerlerinin negatif veya sıfır olmadığından emin ol
      page = Math.max(page, 1);

      const skip = (page - 1) * limit;
      let query = Tip.find({}).skip(skip).limit(limit);

      const tables = await query.sort({ createdAt: -1 });
      return NextResponse.json(tables);
    }
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch data!');
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();
    // console.log(body);
    await connectToDb();

    // UPDATE DATA
    const updatedTable = await Tip.findByIdAndUpdate(
      body.id,
      { $set: { tips: body.tips } },
      { new: true } // Bu seçenek güncellenmiş dokümanı döndürür
    );

    revalidatePath('/', 'layout');
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
    await connectToDb();

    // Getting ID
    const id = request.nextUrl.searchParams.get('id');

    // Deleting Data
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
