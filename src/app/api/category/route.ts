import dbConnect from '@/global/lib/db';
import Category, { ICategory } from '@/global/lib/models/Category';
import { NextResponse } from 'next/server';

export const POST = async () => {
  try {
    await dbConnect();
    const category: ICategory[] = await Category.create();

    return NextResponse.json({ category }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
};
