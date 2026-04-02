import styles from "./detailProduct.module.scss";

// Tipe data produk (sesuaikan dengan struktur Firebase-mu)
type ProductType = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  size?: string; // Optional jika tidak semua produk ada size
};

const DetailProductView = ({ product }: { product: ProductType | null }) => {
  // Kalau data belum ada (lagi loading atau null)
  if (!product) {
    return <div className={styles.container}>Memuat data produk...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Target Praktikum: Judul di tengah */}
      <h1 className={styles.title}>Detail Produk</h1>

      {/* Wrapper utama Flexbox (Kiri-Kanan) */}
      <div className={styles.wrapper}>
        
        {/* Sisi Kiri: Gambar */}
        <div className={styles.imageSection}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        {/* Sisi Kanan: Deskripsi */}
        <div className={styles.infoSection}>
          <p className={styles.category}>{product.category}</p>
          <h2 className={styles.name}>{product.name}</h2>
          
          {/* Format harga ke Rupiah biar rapi */}
          <p className={styles.price}>
            {product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </p>

          <div className={styles.details}>
            <p><strong>ID:</strong> {product.id}</p>
            {product.size && <p><strong>Ukuran:</strong> {product.size}</p>}
            <p><strong>Deskripsi:</strong></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          {/* Tombol pelengkap biar UX nya dapet */}
          <div className={styles.actionButtons}>
             <button className={styles.buyBtn}>Beli Sekarang</button>
             <button className={styles.cartBtn}>+ Keranjang</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductView;