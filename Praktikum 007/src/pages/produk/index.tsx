import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
};

const Kategori = () => {
  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(true); // sementara true agar tidak redirect terus
  const [products, setProducts] = useState<ProductType[]>([]);

  // Cek login
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  // Fetch data produk
  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responseData) => {
        setProducts(responseData.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.nama}</h2>
          <p>Harga: {product.harga}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Kategori;