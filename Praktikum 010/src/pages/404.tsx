import styles from "@/styles/404.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      <div className={styles.error}>
        <div className={styles.error__container}>
          <Image src="/404.svg" alt="404 Illustration" width={350} height={250} className={styles.error__image} priority />
          <h1 className={styles.error__title}>404</h1>
          <h2 className={styles.error__subtitle}>Oops! Halaman Tidak Ditemukan</h2>
          <p className={styles.error__description}>
            Mohon maaf, halaman yang Anda tuju mungkin telah dihapus, dipindahkan, atau Anda salah memasukkan URL.
          </p>
          <Link href="/" className={styles.error__button}>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;