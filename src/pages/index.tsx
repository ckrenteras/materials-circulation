import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        className="relative mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="font-georgia text-lg absolute left-[-0.5rem] top-[-2.5rem] font-bold">Welcome to</p>
        <h1 className="font-georgia text-6xl font-bold">Material Circulation</h1>
        <p className="font-georgia text-lg top-[3.5rem] font-bold italic">@ the BDW</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="font-arial text-base text-gray-200 mb-8">
          Log material donations/check outs here :)
        </p>

        <div className="flex gap-4 justify-center">
  <Link href="/log">
    <button className="px-4 py-2 border border-white text-white rounded transition transform hover:scale-105 hover:bg-white hover:text-black">
      Log Materials
    </button>
  </Link>
  <Link href="/about">
    <button className="px-4 py-2 border border-white text-white rounded transition transform hover:scale-105 hover:bg-white hover:text-black">
      About
    </button>
  </Link>
</div>

      </motion.div>
    </main>
  );
}
