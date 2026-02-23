import { useRouter } from "next/router";

const HalamanProduk = () => {
    const router = useRouter();      
    const { query } = router;        

    // console.log(router);

    return (
        <div>
            <h1 className="text-2xl font-bold">Halaman Produk</h1>
            <p>Produk: {query.id}</p>
        </div>
    );
};

export default HalamanProduk;