import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // it's a req for next-auth session & provider fetching OR the token exists
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}
