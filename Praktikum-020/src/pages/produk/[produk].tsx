import DetailProductView from "@/views/detailProduct"; 

const HalamanProduk = ({ product }: { product: any }) => {
  if (!product) return <p>Gagal memuat produk atau produk tidak ditemukan!</p>;

  return (
    <DetailProductView product={product} />
  );
};

export default HalamanProduk;

export async function getServerSideProps(context: any) {
  const { produk } = context.params;

  // UPDATE: Menggunakan Environment Variable
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${produk}`);
  const response = await res.json();

  return {
    props: {
      product: response.data || null, 
    },
  };
}