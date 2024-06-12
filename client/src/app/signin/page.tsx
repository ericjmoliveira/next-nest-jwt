import { SignInForm } from '@/components/sign-in-form';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div>
      <h1 className="text-lg font-medium mb-4">Sign In</h1>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href={'/signup'}>Sign up</Link>
        </li>
        <li>
          <Link href={'/'}>Return to home</Link>
        </li>
      </ul>
      <SignInForm />
    </div>
  );
}
