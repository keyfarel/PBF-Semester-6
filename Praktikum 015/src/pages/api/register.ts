import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/utils/db/servicefirebase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = req.body;
    
    const result = await signUp(data);

    if (result.status) {
      res.status(200).json({ status: true, message: result.message });
    } else {
      res.status(400).json({ status: false, message: result.message });
    }
  } else {
    res.status(405).json({ status: false, message: "Method Not Allowed" });
  }
}