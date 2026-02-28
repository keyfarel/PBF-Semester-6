import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const { push } = useRouter();

    const handlerLogin = () => {
        // logic login di sini
        localStorage.setItem("isLogin", "true");
        push("/produk");
    };

    return (
        <div>
            <h1>Halaman Login</h1>

            {/* Imperatif → Login -> Product */}
            <button onClick={handlerLogin}>Login</button>
            <br /><br />

            {/* Link → Login -> Register */}
            <Link href="/auth/register">
                <button>Ke Halaman Register</button>
            </Link>
            <br /><br />

            {/* Bonus: tombol tambahan navigasi balik ke Login (buat contoh) */}
            <Link href="/auth/login">
                <button>Kembali ke Login</button>
            </Link>
        </div>
    );
};

export default HalamanLogin;