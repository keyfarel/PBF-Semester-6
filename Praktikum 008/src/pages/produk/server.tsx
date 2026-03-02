import ProductView, { ProductType } from "@/views/products";

export default function ProductPage({ products }: { products: ProductType[] }) {
    return (
        <ProductView products={products} onRefresh={() => { }} />
    );
}

// SSR: fetch data at request time
export async function getServerSideProps() {
    try {
        // Menggunakan absolute path untuk fetching internal API pada SSR
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const res = await fetch(`${API_URL}/api/products`);

        if (!res.ok) {
            throw new Error(`Failed to fetch API with status ${res.status}`);
        }

        const responseData = await res.json();

        return {
            props: {
                products: responseData.data || []
            }
        };
    } catch (error) {
        console.error("SSR fetch error:", error);
        return {
            props: {
                products: []
            }
        };
    }
}
