import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

import { db } from '@/common/libs/firebase';
import firebase from 'firebase/compat/app';

const JWT_SECRET_KEY = 'secretKey';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new NextResponse('Email and password are required.', {
        status: 400,
      });
    }

    const userDoc = db.collection('users').doc(email);
    const userData = (await userDoc.get()).data();

    if (userData?.password === password) {
      const newToken = jwt.sign({ userId: email }, JWT_SECRET_KEY, {
        expiresIn: '1h',
      });

      userDoc.update({
        tokens: firebase.firestore.FieldValue.arrayUnion(newToken),
      });

      const res = {
        msg: 'Login Success',
        token: newToken,
      };

      return new NextResponse(JSON.stringify(res), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify(userData), { status: 401 });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('LOGIN_POST', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
