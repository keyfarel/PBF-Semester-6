import { useRouter } from "next/router";
import useSWR from "swr";
// Sesuaikan path import jika folder views kamu berada di level yang berbeda
import { fetcher } from "@/utils/swr/fetcher";
import ProductView from "../../views/products";

const Kategori = () => {
  const router = useRouter();

  // Contoh redirect jika mau pakai isLogin
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   if (!isLogin) {
  //     router.push("/login");
  //   }
  // }, [isLogin, router]);

  // Fetch data
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // Debug (opsional)
  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("isLoading:", isLoading);

  if (error)
    return <p>Gagal memuat data produk!</p>;

  // Return langsung memanggil komponen View dengan mengirimkan data
  // data API kita berbentuk { status, status_code, data: [...] }
  // Jadi products nya ada di data.data
  const productsData = isLoading ? [] : (data?.data || []);

  return <ProductView products={productsData} onRefresh={() => { }} />;
};

export default Kategori;