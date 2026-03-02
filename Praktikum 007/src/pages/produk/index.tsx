import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
};

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();

  const [products, setProducts] = useState<ProductType[]>([]);
  const router = useRouter();

  // Contoh redirect jika mau pakai isLogin
  // if (!isLogin) {
  //   router.push("/login");
  // }

 useEffect(() => {
    fetch("/api/produk")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setProducts(responseData.data); 
        console.log("fetching produk:", responseData.data);
      })
      .catch((error) => {
        console.error("Error fetch produk:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>Nama: {product.name}</p>
            <p>Harga: {product.price}</p>
            <p>Ukuran: {product.size}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Kategori;