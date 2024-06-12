'use client';

import { signIn } from '@/lib/actions';

export function SignInForm() {
  return (
    <form action={signIn}>
      <section>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email..." />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="email" placeholder="Password..." />
      </section>
      <button>Sign in</button>
    </form>
  );
}
