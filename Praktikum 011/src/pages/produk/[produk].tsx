// src/pages/produk/[produk].tsx

// import { useRouter } from "next/router";
// import useSWR from "swr";
// import { fetcher } from "@/utils/swr/fetcher";
import DetailProductView from "@/views/detailProduct"; 

const HalamanProduk = ({ product }: { product: any }) => {
  // --- BAGIAN INI DI-COMMENT SESUAI INSTRUKSI ---
  // const { query } = useRouter();

  // const { data, error, isLoading } = useSWR(
  //   query.produk ? `/api/produk/${query.produk}` : null,
  //   fetcher
  // );

  // if (isLoading) return <p>Loading...</p>;
  // if (error || !data?.data) return <p>Gagal memuat produk!</p>;
  // ----------------------------------------------

  // Karena pakai SSR, kita nggak butuh loading state lagi.
  // Data 'product' langsung dilempar dari getServerSideProps di bawah.
  
  if (!product) return <p>Gagal memuat produk atau produk tidak ditemukan!</p>;

  return (
    <DetailProductView product={product} />
  );
};

export default HalamanProduk;

// --- TAMBAHKAN KODE SSR INI DI BAWAH ---
export async function getServerSideProps(context: any) {
  // Tangkap parameter ID dinamis dari URL (misal: 4TX9oCS...)
  const { produk } = context.params;

  // Lakukan fetch data di sisi server sebelum halaman di-render
  const res = await fetch(`http://localhost:3000/api/produk/${produk}`);
  const response = await res.json();

  return {
    props: {
      // Kirim data ke komponen HalamanProduk sebagai props 'product'
      product: response.data || null, 
    },
  };
}