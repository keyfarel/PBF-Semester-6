import { Inter } from 'next/font/google';
import Link from 'next/link';
import { PersonFill } from 'react-bootstrap-icons';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
    return (
        <div className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 relative`}>
            {/* Navigation */}
            <nav className="absolute top-6 left-6 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </nav>

            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <div className="max-w-3xl w-full">
                    <div className="flex flex-col items-center mb-12">
                        {/* Avatar Placeholder */}
                        <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mb-8 flex items-center justify-center shadow-2xl ring-4 ring-offset-4 ring-offset-gray-900 ring-blue-500/50 animate-pulse">
                            <PersonFill size={64} className="text-white drop-shadow-lg" />
                        </div>

                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                            About Me
                        </h1>
                        <p className="text-xl text-gray-300">
                            D4 Teknik Informatika
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 text-left">
                        {/* Card 1 */}
                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                            <label className="block text-xs uppercase text-blue-400 font-bold tracking-wider mb-2 group-hover:text-blue-300">Nama Mahasiswa</label>
                            <p className="text-lg font-medium text-white">Key Firdausi Alfarel</p>
                        </div>
                        {/* Card 2 */}
                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                            <label className="block text-xs uppercase text-purple-400 font-bold tracking-wider mb-2 group-hover:text-purple-300">NIM</label>
                            <p className="text-lg font-medium text-white">2341720186</p>
                        </div>
                        {/* Card 3 */}
                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
                            <label className="block text-xs uppercase text-pink-400 font-bold tracking-wider mb-2 group-hover:text-pink-300">Program Studi</label>
                            <p className="text-lg font-medium text-white">Teknik Informatika</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-6 left-0 right-0 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Praktikum PBF
            </footer>
        </div>
    );
}
