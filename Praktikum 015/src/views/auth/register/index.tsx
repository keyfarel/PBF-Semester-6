import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

const TampilanRegister = () => {
    const { push } = useRouter();

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log("Form register disubmit ✔");
        console.log("Mengalihkan ke halaman /auth/login ...");
        push("/auth/login");
    };

    return (
        <div className={styles.register}>
            <div className={styles.register__container}>
                <div className={styles.register__header}>
                    <h1 className={styles.register__title}>Buat Akun</h1>
                </div>

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

                    <button type="submit" className={styles.register__form__button}>
                        Daftar Sekarang
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