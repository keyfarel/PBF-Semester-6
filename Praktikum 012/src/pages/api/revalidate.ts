// src/pages/api/revalidate.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== "RAHASIA123") {
    return res.status(401).json({ message: "Token tidak valid" });
  }

  try {
    const pathToRevalidate = req.query.path as string || "/produk/static";
    await res.revalidate(pathToRevalidate);

    return res.json({ 
      revalidated: true, 
      message: `Cache pada halaman ${pathToRevalidate} berhasil diperbarui secara instan!` 
    });
  } catch (err) {
    return res.status(500).json({ 
      revalidated: false, 
      message: "Gagal melakukan revalidasi", 
      error: err 
    });
  }
}