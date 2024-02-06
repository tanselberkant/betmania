import { NextRequest, NextResponse } from 'next/server';
import { Post } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';

// Params için bir tip tanımı
interface Params {
  slug: string;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  const { slug } = params;

  try {
    await connectToDb(); // Bağlantı asenkron olduğu için await kullanılmalı

    const post = await Post.findOne({ slug: slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    return new NextResponse('Failed to fetch post!', { status: 500 });
  }
};

export async function POST(req: NextRequest) {}
