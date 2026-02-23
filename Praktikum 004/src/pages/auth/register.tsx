import Link from "next/link";

const HalamanRegister = () => {
  return (
    <div>
      <h1>Halaman Register</h1>

      <Link href="/auth/login">
        <button>Ke Halaman Login</button>
      </Link>
    </div>
  );
};

export default HalamanRegister;