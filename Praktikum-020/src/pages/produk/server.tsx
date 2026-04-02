import { useRouter } from "next/router";
import ProductView from "@/views/products"; 

type ProductType = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const router = useRouter();

  const handleRefresh = () => {
    router.replace(router.asPath);
  };

  return (
    <ProductView products={props.products} onRefresh={handleRefresh} />
  );
};

export default HalamanProdukServer;

export async function getServerSideProps() {
  // UPDATE: Menggunakan Environment Variable
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk`);
  const response = await res.json();

  const mapped: ProductType[] = (response.data ?? []).map((p: any) => ({
    id: p.id,
    name: p.nama ?? p.name ?? "Produk Tanpa Nama",
    price: p.harga ?? p.price ?? 0,
    image: p.image ?? "https://via.placeholder.com/150",
    category: p.kategori ?? p.category ?? "Umum",
  }));

  return {
    props: {
      products: mapped,
    },
  };
}