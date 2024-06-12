'use client';

import { signOut } from '@/lib/actions';

export function SignOutForm() {
  return (
    <form action={signOut}>
      <button>Sign out</button>
    </form>
  );
}
