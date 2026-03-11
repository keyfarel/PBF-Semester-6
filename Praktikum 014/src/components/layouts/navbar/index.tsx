import styles from "../../../styles/navbar.module.css"; // Sesuaikan jika pakai .scss
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>My App</h1> {/* Nama aplikasi bisa kamu sesuaikan */}
      </div>

      <div>
        {session ? (
          <div className={styles.profile}>
            <span className={styles.greeting}>
              Halo, {(session.user as any)?.fullname || session.user?.email}
            </span>
            {/* Menggabungkan class btn umum dan btnLogout */}
            <button 
              className={`${styles.btn} ${styles.btnLogout}`} 
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button className={styles.btn} onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;