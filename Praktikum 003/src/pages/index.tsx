import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Praktikum() {
  return (
    <div className={inter.className}>
      <h1>Praktikum Next.js Pages</h1>
      <p>Nama: Key Firdausi Alfarel</p>
      <p>NIM: 2341729186</p>
    </div>
  );
}