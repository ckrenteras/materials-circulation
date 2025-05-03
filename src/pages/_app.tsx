import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href="/" className="fixed top-4 left-4 z-50">
        <Image
          src="/favicon.ico"
          alt="Home"
          width={32}
          height={32}
          className="hover:opacity-80 cursor-pointer"
        />
      </Link>
      <Component {...pageProps} />
    </>
  );
}
