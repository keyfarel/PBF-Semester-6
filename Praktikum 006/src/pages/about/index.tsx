import { Inter } from 'next/font/google';
import Link from 'next/link';
import { PersonFill } from 'react-bootstrap-icons';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Ini Halaman About</h1>
        </div>
    );
}
