import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    // logic login di sini
    push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>

      {/* 3 cara benar untuk melakukan push */}
      <button onClick={handlerLogin}>Login</button> 
      <br />

      <button onClick={() => push("/produk")}>Login</button>
      <br />

      <button onClick={() => handlerLogin()}>Login</button>
      <br />

      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default HalamanLogin;