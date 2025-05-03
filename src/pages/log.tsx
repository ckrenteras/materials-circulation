import Link from 'next/link';

export default function LogPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Log Materials</h1>

      <div className="w-full max-w-4xl scale-[0.95] mb-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfHe0Rmp5MHaa2F1u0xafNqPSrLkY1H5tiePqdZhZ6i-_ZSSQ/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          loading="lazy"
          className="w-full h-[800px]" // Removed border and rounded styles
        >
          Loading…
        </iframe>
      </div>

      <Link href="/">
        <button className="px-4 py-2 border border-white text-white bg-black rounded hover:bg-neutral-900">
          ← Back
        </button>
      </Link>
    </div>
  );
}
