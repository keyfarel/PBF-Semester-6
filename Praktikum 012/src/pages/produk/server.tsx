// Praktikum 011\src\pages\produk\server.tsx
import { useRouter } from "next/router";
import ProductView from "@/views/products"; // Pastikan path ini benar ya

// Samakan tipe datanya dengan yang diminta oleh ProductView
type ProductType = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const router = useRouter();

  // Bikin fungsi refresh untuk tombol "Refresh Data" di View
  // router.replace akan memicu getServerSideProps untuk jalan ulang tanpa full reload
  const handleRefresh = () => {
    router.replace(router.asPath);
  };

  return (
    // Langsung panggil komponen View-nya
    <ProductView products={props.products} onRefresh={handleRefresh} />
  );
};

export default HalamanProdukServer;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  // MAPPING DISESUAIKAN: Ubah ke bahasa Inggris biar dibaca sama ProductView
  const mapped: ProductType[] = (response.data ?? []).map((p: any) => ({
    id: p.id,
    name: p.nama ?? p.name ?? "Produk Tanpa Nama",  // View pakai 'name'
    price: p.harga ?? p.price ?? 0,                 // View pakai 'price'
    image: p.image ?? "https://via.placeholder.com/150",
    category: p.kategori ?? p.category ?? "Umum",   // View pakai 'category'
  }));

  return {
    props: {
      products: mapped,
    },
  };
}