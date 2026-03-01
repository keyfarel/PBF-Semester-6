import { useRouter } from 'next/router';

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Blog Post Detail</h1>
            <p>Slug: {slug}</p>
        </div>
    );
};

export default BlogPost;
