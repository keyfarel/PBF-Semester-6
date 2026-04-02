import Image from "next/image";
import styles from "@/pages/produk/produk.module.scss";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  image: string;
  kategori: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <div key={product.id} className={styles.produk__content__item}>
                <div className={styles.produk__content__item__image}>
                  <Image 
                    src={product.image} 
                    alt={product.nama} 
                    width={500} 
                    height={500}
                    priority={true}
                  />
                </div>
                <h4 className={styles.produk__content__item__name}>
                  {product.nama}
                </h4>
                <p className={styles.produk__content__item__category}>
                  {product.kategori}
                </p>
                <p className={styles.produk__content__item__price}>
                  Rp {product.harga.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.produk__content__skeleton}>
            <div className={styles.produk__content__skeleton__image}></div>
            <div className={styles.produk__content__skeleton__name}></div>
            <div className={styles.produk__content__skeleton__category}></div>
            <div className={styles.produk__content__skeleton__price}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;