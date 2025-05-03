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
        <p className="text-lg absolute left-[-1rem] top-[-2.5rem]">Welcome to</p>
        <h1 className="text-6xl font-bold">Materials Circulation</h1>
        <p className="text-lg top-[3.5rem]">@ the BDW</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-base text-gray-200 mb-8">
          Log material donations/check outs here :)
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/log">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Log Materials
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500">
              About
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
