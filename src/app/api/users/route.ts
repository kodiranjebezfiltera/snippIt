import dbConnect from '@/global/lib/db';
import User, { IUser } from '@/global/lib/models/Users';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await dbConnect();
    const users: IUser[] = await User.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
};

export const POST = async () => {
  try {
    await dbConnect();
    const user: IUser[] = await User.create();

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
};
