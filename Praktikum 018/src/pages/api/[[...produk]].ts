import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveDataByID, retrieveProducts } from "@/utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Ambil parameter dinamis (bisa dari req.query.produk atau req.query.product)
  const params = req.query.produk || req.query.product || [];

  // Logika untuk nyari posisi ID Firebase yang benar
  // Karena Next.js kadang memasukkan string "produk" ke dalam array parameter
  let idFirebase = null;
  if (params[0] === "produk" || params[0] === "product") {
    idFirebase = params[1]; // Jika elemen pertama adalah "produk", maka ID ada di index ke-1
  } else {
    idFirebase = params[0]; // Jika tidak, ID langsung ada di index ke-0
  }

  if (idFirebase) {
    const data = await retrieveDataByID("products", idFirebase);
    
    // Cek apakah datanya ada isinya atau null
    if (data) {
      // Jika data ketemu, kembalikan 200 OK
      res.status(200).json({ status: true, status_code: 200, data });
    } else {
      // Jika data null (nggak ketemu), kembalikan 404 Not Found
      res.status(404).json({ status: false, status_code: 404, data: null });
    }
  } else {
    // Kalau tidak ada ID sama sekali (URL hanya /api/produk)
    const data = await retrieveProducts("products");
    res.status(200).json({ status: true, status_code: 200, data });
  }
}