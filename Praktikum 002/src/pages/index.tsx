import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Praktikum 1 - Home</title>
        <meta name="description" content="Praktikum PBF Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6 text-center`}>
        <div className="max-w-2xl w-full">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 animate-pulse">
            Welcome to Praktikum 1
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            This is the main landing page for the PBF Practicum assignment.
            Explore the project to see the implementation of Next.js pages and navigation.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/about"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="mr-2">Go to About Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <footer className="absolute bottom-6 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Praktikum PBF
        </footer>
      </main>
    </>
  );
}
