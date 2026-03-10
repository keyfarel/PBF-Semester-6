import { useRouter } from "next/router";
import ProductView from "@/views/products"; 

type ProductType = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const HalamanProdukStatic = (props: { products: ProductType[] }) => {
  const router = useRouter();
  const handleRefresh = () => {
    router.replace(router.asPath);
  };

  return (
    <ProductView products={props.products} onRefresh={handleRefresh} />
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/produk");
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
    // Menambahkan ISR: Halaman akan di-generate ulang di background 
    // setiap kali ada request baru, dengan jeda minimal 10 detik.
    revalidate: 10, 
  };
}