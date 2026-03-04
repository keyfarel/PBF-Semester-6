import { addData } from "@/pages/utils/db/servicefirebase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dummyProducts = [
    { name: "Kemeja Flanel", price: 150000, size: "L", category: "Fashion" },
    { name: "Celana Chino", price: 200000, size: "32", category: "Fashion" },
    { name: "Jaket Denim", price: 350000, size: "XL", category: "Outerwear" }
  ];

  try {
    for (const product of dummyProducts) {
      await addData("products", product);
    }

    return res.status(200).json({ 
      message: "3 Data berhasil ditembak ke Firestore." 
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Gagal nembak data", 
      error 
    });
  }
}