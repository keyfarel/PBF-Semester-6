import TampilanProduk from "@/views/produk";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  image: string;
  kategori: string;
};

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Produk</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukServer;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  const mapped = (response.data ?? []).map((p: any) => ({
    id: p.id,
    nama: p.nama ?? p.name ?? "",
    harga: p.harga ?? p.price ?? 0,
    image: p.image ?? "",
    kategori: p.kategori ?? p.category ?? "",
  }));

  return {
    props: {
      products: mapped,
    },
  };
}