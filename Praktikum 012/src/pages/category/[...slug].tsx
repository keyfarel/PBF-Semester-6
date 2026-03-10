import { useRouter } from "next/router";

const CategoryPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Halaman Kategori (Catch-all Route)</h1>
            <p>Parameter URL (slug):</p>
            {slug && Array.isArray(slug) ? (
                <ul>
                    {slug.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>{slug}</p>
            )}
        </div>
    );
};

export default CategoryPage;
