// src/pages/api/revalidate.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Ambil nilai dari parameter ?data= di URL
  const dataParam = req.query.data;

  // 2. Buat kondisi jika value data adalah "produk"
  if (dataParam === "produk") {
    try {
      // Revalidasi halaman static produk
      await res.revalidate("/produk/static");
      
      return res.json({ 
        revalidated: true, 
        message: "Sukses! Cache halaman produk berhasil diperbarui." 
      });
    } catch (err) {
      return res.status(500).json({ 
        revalidated: false, 
        message: "Terjadi kesalahan saat melakukan revalidasi." 
      });
    }
  }

  // 3. Kondisi jika parameter data kosong atau isinya bukan "produk"
  return res.status(400).json({
    revalidated: false,
    message: "Gagal! Parameter data tidak valid atau kosong. Pilih data mana yang akan di-revalidate.",
  });
}