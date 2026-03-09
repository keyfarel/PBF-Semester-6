import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";
// Import View yang baru kita buat
import DetailProductView from "@/views/detailProduct"; 

const HalamanProduk = () => {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(
    query.produk ? `/api/produk/${query.produk}` : null,
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;
  if (error || !data?.data) return <p>Gagal memuat produk!</p>;

  return (
    // Panggil View dan kirim datanya (data.data)
    <DetailProductView product={data.data} />
  );
};

export default HalamanProduk;