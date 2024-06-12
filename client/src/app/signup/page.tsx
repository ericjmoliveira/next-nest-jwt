import { SignUpForm } from '@/components/sign-up-form';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div>
      <h1 className="text-lg font-medium mb-4">Sign Up</h1>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href={'/signin'}>Sign in</Link>
        </li>
        <li>
          <Link href={'/'}>Return to home</Link>
        </li>
      </ul>
      <SignUpForm />
    </div>
  );
}
