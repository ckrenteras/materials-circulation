import Link from 'next/link';

export default function LogPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Log Materials</h1>

      <div className="w-full aspect-[4/3] mb-6">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfHe0Rmp5MHaa2F1u0xafNqPSrLkY1H5tiePqdZhZ6i-_ZSSQ/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          loading="lazy"
          className="w-full h-full border rounded"
        >
          Loading…
        </iframe>
      </div>

      <Link href="/">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}
