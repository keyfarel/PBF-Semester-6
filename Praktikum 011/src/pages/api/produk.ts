// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveProducts } from "@/utils/db/servicefirebase"; // sesuaikan path file kamu
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data = await retrieveProducts("products");

    return res.status(200).json({
      status: true,
      status_code: 200,
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      status: false,
      status_code: 500,
      data: null,
    });
  }
}
