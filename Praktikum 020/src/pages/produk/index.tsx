import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";
import ProductView from "../../views/products";

const Kategori = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  if (error) return <p>Gagal memuat data produk!</p>;

  const productsData = isLoading ? [] : (data?.data || []);

  return (
    <div>
      <h1 data-testid="judul-halaman" style={{ display: 'none' }}>
        Daftar Produk
      </h1>

      <ProductView products={productsData} onRefresh={() => { }} />
    </div>
  );
};

export default Kategori;