// src/components/layouts/navbar/index.tsx
import styles from "../../../styles/navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>My App</h1>
      </div>

      <div>
        {session ? (
          <div className={styles.profile}>
            <span className={styles.greeting}>
              Halo, {(session.user as any)?.fullname || session.user?.email}
            </span>
            <button 
              className={`${styles.btn} ${styles.btnLogout}`} 
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
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