'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const apiBaseUrl = process.env.API_BASE_URL;

export async function signIn(formData: FormData) {
  const signInData = {
    email: formData.get('email'),
    password: formData.get('password')
  };

  const response = await fetch(`${apiBaseUrl}/auth/signin`, {
    method: 'POST',
    body: JSON.stringify(signInData),
    headers: { 'content-type': 'application/json' }
  });
  const data = await response.json();

  if (!response.ok) {
    return console.log(data.message);
  }

  cookies().set('accessToken', data.accessToken, { httpOnly: true, maxAge: 60 * 60 * 24 });

  redirect('/dashboard');
}

export async function signUp(formData: FormData) {
  const signUpData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password')
  };

  const response = await fetch(`${apiBaseUrl}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(signUpData),
    headers: { 'content-type': 'application/json' }
  });
  const data = await response.json();

  if (!response.ok) {
    return console.log(data.message);
  }

  cookies().set('accessToken', data.accessToken, { httpOnly: true, maxAge: 60 * 60 * 24 });
}

export async function signOut() {
  cookies().delete('accessToken');
  redirect('/');
}

export async function verifyAccessToken(accessToken: string) {
  const response = await fetch(`${apiBaseUrl}/auth/verify`, {
    headers: { authorization: `Bearer ${accessToken}` }
  });

  return response.ok;
}
