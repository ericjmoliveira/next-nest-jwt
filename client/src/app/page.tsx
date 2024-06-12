import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-medium mb-4">Home</h1>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href={'/signin'}>Sign in</Link>
        </li>
        <li>
          <Link href={'/signup'}>Sign up</Link>
        </li>
      </ul>
    </div>
  );
}
