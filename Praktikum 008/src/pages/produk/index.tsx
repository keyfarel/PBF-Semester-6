import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// Sesuaikan path import jika folder views kamu berada di level yang berbeda
import ProductView, { ProductType } from "../../views/products"; 

const Kategori = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const router = useRouter();

  // Contoh redirect jika mau pakai isLogin
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   if (!isLogin) {
  //     router.push("/login");
  //   }
  // }, [isLogin, router]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      setProducts(responseData.data);
      console.log("fetching produk:", responseData.data);
    } catch (error) {
      console.error("Error fetch produk:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Return langsung memanggil komponen View dengan mengirimkan data
  return <ProductView products={products} onRefresh={fetchData} />;
};

export default Kategori;