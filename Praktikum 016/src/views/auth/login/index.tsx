import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.scss";
import { FaEnvelope, FaLock } from "react-icons/fa"; // FaSignInAlt dihapus
import { useState } from "react";

const TampilanLogin = () => {
    const { push } = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const form = e.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            password: form.password.value, 
        };

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.status) {
                console.log("Login Berhasil ✔");
                form.reset();
                push("/"); 
            } else {
                setIsLoading(false);
                setError(result.message); 
            }
        } catch (err) {
            setIsLoading(false);
            setError("Terjadi kesalahan pada server");
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <div className={styles.login__header}>
                    {/* Ikon besar di atas dihapus */}
                    <h1 className={styles.login__title}>Welcome Back</h1>
                    <p className={styles.login__subtitle}>Silakan masuk ke akun Anda</p>
                </div>

                {error && <div className={styles.login__error}>{error}</div>}

                <form className={styles.login__form} onSubmit={handleLogin}>
                    <div className={styles.login__form__group}>
                        <label htmlFor="email">Alamat Email</label>
                        <div className={styles.login__input_wrapper}>
                            <FaEnvelope className={styles.login__input_icon} />
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="nama@email.com" 
                                required 
                            />
                        </div>
                    </div>

                    <div className={styles.login__form__group}>
                        <label htmlFor="password">Kata Sandi</label>
                        <div className={styles.login__input_wrapper}>
                            <FaLock className={styles.login__input_icon} />
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Masukkan kata sandi" 
                                required 
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.login__form__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Masuk"}
                    </button>
                </form>

                <p className={styles.login__link}>
                    Belum punya akun? <Link href={"/auth/register"}>Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanLogin;