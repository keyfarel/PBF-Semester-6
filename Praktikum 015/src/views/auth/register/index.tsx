import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";
import { useState } from "react";

const TampilanRegister = () => {
    const { push } = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

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
                setError(result.message);
            }
        } catch (err) {
            setError("Terjadi kesalahan pada server");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.register}>
            <div className={styles.register__container}>
                <div className={styles.register__header}>
                    <h1 className={styles.register__title}>Buat Akun</h1>
                </div>

                {error && <p style={{ color: "#fca5a5", marginBottom: "1rem", textAlign: "center" }}>{error}</p>}

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
                        disabled={isLoading} // Disable tombol saat proses register
                    >
                        {isLoading ? "Memproses..." : "Daftar Sekarang"}
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