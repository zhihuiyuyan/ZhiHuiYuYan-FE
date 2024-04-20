import { NextResponse } from 'next/server';

import { db } from '@/common/libs/firebase';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new NextResponse('Email and password are required.', {
        status: 400,
      });
    }

    const userDoc = await db.collection('users').doc(email).get();
    const userData = userDoc.data();

    if (userData?.password === password) {
      return new NextResponse('Login Success', { status: 200 });
    } else {
      return new NextResponse(JSON.stringify(userData), { status: 401 });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('LOGIN_POST', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
