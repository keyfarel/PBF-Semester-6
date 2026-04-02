import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({
      revalidated: false,
      message: "Gagal! Token security tidak valid atau tidak ditemukan.",
    });
  }

  const dataParam = req.query.data;

  if (dataParam === "produk") {
    try {
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

  return res.status(400).json({
    revalidated: false,
    message: "Gagal! Parameter data tidak valid atau kosong.",
  });
}