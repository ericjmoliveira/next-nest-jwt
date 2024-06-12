import { NextRequest, NextResponse } from 'next/server';

import { verifyAccessToken } from './lib/actions';

const publicRoutes = ['/', '/signin', '/signup'];
const protectedRoutes = ['/dashboard'];

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  if (!accessToken) {
    if (protectedRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    return NextResponse.next();
  }

  const isAccessTokenValid = await verifyAccessToken(accessToken);

  if (!isAccessTokenValid) {
    request.cookies.delete('accessToken');
    if (protectedRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    return NextResponse.next();
  }

  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/signin', '/signup', '/dashboard']
};
