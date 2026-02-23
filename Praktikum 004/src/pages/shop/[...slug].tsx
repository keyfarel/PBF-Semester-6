import { useRouter } from "next/router";

const HalamanToko = () => {
    const router = useRouter();
    const { slug } = router.query;

    console.log(router);

    return (
        <div>
            <h1>Halaman Toko</h1>
            <p>{`Toko: ${Array.isArray(slug) ? slug.join(" ") : slug}`}</p>
        </div>
    );
};

export default HalamanToko;