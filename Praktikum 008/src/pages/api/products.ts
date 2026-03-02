import type { NextApiRequest, NextApiResponse } from "next";

type Product = {
    id: number | string;
    name: string;
    category: string;
    price: number;
    image: string;
};

type Data = {
    status: boolean;
    status_code: number;
    data: Product[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const products: Product[] = [
        {
            id: 1,
            name: "Sepatu Sneaker",
            category: "Sepatu",
            price: 1200000,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        },
        {
            id: 2,
            name: "Tas Ransel Casual",
            category: "Tas",
            price: 350000,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        },
        {
            id: 3,
            name: "Jam Tangan Kasual",
            category: "Aksesoris",
            price: 850000,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        }
    ];

    return res.status(200).json({
        status: true,
        status_code: 200,
        data: products,
    });
}
