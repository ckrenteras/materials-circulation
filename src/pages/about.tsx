import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <div className="w-full h-64 relative">
        <Image
          src="/bdwbanner.jpg"
          alt="BDW Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <motion.div
        className="max-w-3xl mx-auto p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-georgia text-4xl font-bold mb-4">About</h1>
        <p className="font-arial text-lg leading-relaxed mb-6">
          Material Circulation is a part of the BDW’s mission to reduce waste and make the space 
          accessible to all. This website is, specifically, aimed at increasing visibility of user
          consumption and helping understand the flow of materials through the BDW. By logging 
          resources taken in and taken out of Materials Circulation, you help us track usage, save 
          resources, and promote sustainability.
        </p>
        <Link
          href="/"
          className="inline-block border border-white text-white px-4 py-2 rounded transition transform hover:scale-105 hover:bg-white hover:text-black"
          >
          ← Back
        </Link>

      </motion.div>
    </>
  );
}
