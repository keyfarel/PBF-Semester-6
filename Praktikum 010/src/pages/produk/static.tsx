import TampilanProduk from "@/views/produk";
import { ProductType } from "@/pages/types/Product.type";

const HalamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Produk</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/products");
  const response = await res.json();

  const mappedData = response.data.map((item: any) => ({
    id: item.id,
    nama: item.name,
    kategori: item.category,
    harga: item.price,
    image: item.image,
  }));

  return {
    props: {
      products: mappedData,
    },
  };
}