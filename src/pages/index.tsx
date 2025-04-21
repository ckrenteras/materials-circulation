import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Materials Circulation</h1>
      <p className="text-lg mb-10">Track and share your design studio materials here.</p>
      <div className="flex gap-4">
        <Link href="/log" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Log Materials
        </Link>
        <Link href="/about" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
          About
        </Link>
      </div>
    </main>
  );
}