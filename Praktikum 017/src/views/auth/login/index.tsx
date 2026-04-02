import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.scss";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { signIn } from "next-auth/react"; 

const TampilanLogin = () => {
    const { push, query } = useRouter(); 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const callbackUrl: any = query.callbackUrl || "/";

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
            });

            if (res?.error) {
                setIsLoading(false);
                setError(res.error);
            } else {
                console.log("Login Berhasil ✔");
                form.reset();
                push(callbackUrl); 
            }
        } catch (err) {
            setIsLoading(false);
            setError("Terjadi kesalahan pada sistem login");
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <div className={styles.login__header}>
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

                <div className={styles.login__divider}>
                    <span>atau masuk dengan</span>
                </div>

                <button 
                    type="button"
                    className={styles.login__google_button}
                    onClick={() => signIn("google", { callbackUrl })}
                >
                    <FaGoogle className={styles.login__google_icon} />
                    Google
                </button>

                <p className={styles.login__link}>
                    Belum punya akun? <Link href={"/auth/register"}>Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanLogin;