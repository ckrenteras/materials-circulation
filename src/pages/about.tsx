import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="font-georgia text-4xl font-bold mb-4">About</h1>
      <p className="font-arial text-lg leading-relaxed">
        The Material Circulation Station is part of our design studio’s mission to reduce waste
        and make resources accessible to all. This website is a part of a larger goal to understand
        the flow of materials throughout the BDW, supplying critical data on which resources users 
        of the space most commonly use and discard. By logging materials you donate or check out,
        you help us track usage, save resources, and promote sustainability in the BDW.
      </p>
      <Link href="/" className="block mt-6">
      <button className="px-4 py-2 bg-black-200 rounded hover:bg-black-300">
        ← Back
      </button>
    </Link>
    </div>
  );
}
