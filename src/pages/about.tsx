import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/bdwbanner.jpg"
        alt="BDW Banner"
        width={1200}
        height={300}
        className="w-full h-auto mb-6 rounded"
      />
      <h1 className="font-georgia text-4xl font-bold mb-4">About</h1>
      <p className="font-arial text-lg leading-relaxed mb-6">
        The Material Circulation Station is part of our design studio’s mission to reduce waste
        and make resources accessible to all. This website is a part of a larger goal to understand
        the flow of materials throughout the BDW, supplying critical data on which resources users 
        of the space most commonly use and discard. By logging materials you donate or check out,
        you help us track usage, save resources, and promote sustainability in the BDW.
      </p>
      <Link href="/" className="inline-block border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black">
        ← Back
      </Link>
    </motion.div>
  );
}
