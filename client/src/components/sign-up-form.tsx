'use client';

import { signUp } from '@/lib/actions';

export function SignUpForm() {
  return (
    <form action={signUp}>
      <section>
        <label htmlFor="firstName">First Name</label>
        <input type="firstName" name="firstName" id="firstName" placeholder="First name..." />
      </section>
      <section>
        <label htmlFor="lastName">Last Name</label>
        <input type="lastName" name="lastName" id="lastName" placeholder="Last name..." />
      </section>
      <section>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email..." />
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="email" placeholder="Password..." />
      </section>
      <button>Sign up</button>
    </form>
  );
}
