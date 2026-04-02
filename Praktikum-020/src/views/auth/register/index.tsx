import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // FaUserPlus dihapus
import { useState } from "react";

const TampilanRegister = () => {
    const { push } = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(""); // Reset error setiap kali submit baru

        const form = e.target as HTMLFormElement;
        const data = {
            fullname: form.fullname.value,
            email: form.email.value,
            password: form.password.value,
        };

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.status) {
                console.log("Registrasi Berhasil ✔");
                form.reset();
                push("/auth/login");
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
        <div className={styles.register}>
            <div className={styles.register__container}>
                <div className={styles.register__header}>
                    {/* Ikon besar dihapus */}
                    <h1 className={styles.register__title}>Buat Akun Baru</h1>
                    <p className={styles.register__subtitle}>Silakan lengkapi data Anda di bawah ini</p>
                </div>

                {error && <div className={styles.register__error}>{error}</div>}

                <form className={styles.register__form} onSubmit={handleRegister}>
                    <div className={styles.register__form__group}>
                        <label htmlFor="fullname">Nama Lengkap</label>
                        <div className={styles.register__input_wrapper}>
                            <FaUser className={styles.register__input_icon} />
                            <input 
                                type="text" 
                                id="fullname" 
                                name="fullname" 
                                placeholder="Contoh: John Doe" 
                                required 
                            />
                        </div>
                    </div>

                    <div className={styles.register__form__group}>
                        <label htmlFor="email">Alamat Email</label>
                        <div className={styles.register__input_wrapper}>
                            <FaEnvelope className={styles.register__input_icon} />
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="nama@email.com" 
                                required 
                            />
                        </div>
                    </div>

                    <div className={styles.register__form__group}>
                        <label htmlFor="password">Kata Sandi</label>
                        <div className={styles.register__input_wrapper}>
                            <FaLock className={styles.register__input_icon} />
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Minimal 8 karakter" 
                                required 
                                minLength={8}
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={styles.register__form__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Daftar Sekarang"}
                    </button>
                </form>

                <p className={styles.register__link}>
                    Sudah memiliki akun? <Link href={"/auth/login"}>Masuk di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;