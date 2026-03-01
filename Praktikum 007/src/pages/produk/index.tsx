import ProductView from "@/views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        const loginStatus = localStorage.getItem("isLogin");
        if (loginStatus === "true") {
            setIsLogin(true);
        } else {
            push("/auth/login");
        }
        setIsLoading(false);
    }, [push]);

    if (isLoading || !isLogin) {
        return null;
    }

    return (
        <>
            <ProductView />
        </>
    );
};

export default Produk;