// src/components/layouts/navbar/index.tsx
import Link from "next/link";
import styles from "../../../styles/navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  
  const role = (session?.user as any)?.role;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>My App</h1>
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link href="/produk" style={{ textDecoration: 'none', color: '#333' }}>Produk</Link>
        
        {role === "admin" && (
          <Link href="/admin" style={{ textDecoration: 'none', color: '#2a5298' }}>
            Admin Dashboard
          </Link>
        )}
      </div>

      <div>
        {session ? (
          <div className={styles.profile}>
            <span className={styles.greeting}>
              Halo, {(session.user as any)?.fullname || session.user?.email}
              <span style={{ fontSize: '10px', backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px', color: '#64748b', textTransform: 'uppercase' }}>
                {role}
              </span>
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