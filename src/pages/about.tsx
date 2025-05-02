import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Material Circulation</h1>
      <p className="text-lg leading-relaxed">
        The Material Circulation Station is part of our design studio’s mission to reduce waste
        and make resources accessible to all. By logging materials you donate or check out,
        you help us track usage, save resources, and promote sustainability in the BDW.
      </p>
      <Link href="/" className="block mt-6">
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        ← Back
      </button>
    </Link>
    </div>
  );
}
