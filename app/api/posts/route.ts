import { Post } from '@/lib/models';
import { connectToDb } from '@/utils/connectDb';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    await connectToDb();

    const pageStr = request.nextUrl.searchParams.get('page');
    let page = pageStr ? parseInt(pageStr) : 1;
    let limit = parseInt(process.env.POST_LIMIT || '8');
    // let limit = 1;

    // Sayfa ve limit değerlerinin negatif veya sıfır olmadığından emin ol
    page = Math.max(page, 1);
    limit = Math.max(limit, 1);

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};

export async function POST(req: NextRequest) {}
