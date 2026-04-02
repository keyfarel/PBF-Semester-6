import Link from "next/link";
import styles from "../../../styles/navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image"; 

const Navbar = () => {
  const { data: session } = useSession();
  
  const role = (session?.user as any)?.role;
  const fullname = (session?.user as any)?.fullname || session?.user?.email;
  const userImage = session?.user?.image || `https://ui-avatars.com/api/?name=${fullname}&background=3b82f6&color=fff&rounded=true&bold=true`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/" className={styles.logo}>
          MyApp
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/produk" className={styles.link}>Produk</Link>
          
          {role === "admin" && (
            <Link href="/admin" className={styles.linkAdmin}>
              Admin Panel
            </Link>
          )}

          {(role === "editor" || role === "admin") && (
            <Link href="/editor" className={styles.linkEditor}>
              Editor Panel
            </Link>
          )}
        </div>
      </div>

      {/* Bagian Kanan: Profile & Auth */}
      <div className={styles.navRight}>
        {session ? (
          <div className={styles.profileWrapper}>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{fullname}</span>
              <span className={styles.userRole}>{role}</span>
            </div>
            
            <Image 
              src={userImage} 
              alt="Profile" 
              width={36} 
              height={36} 
              className={styles.avatar} 
            />
            
            <div className={styles.divider}></div>
            <button 
              className={styles.btnLogout} 
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
            >
              Logout
            </button>
          </div>
        ) : (
          <button className={styles.btnLogin} onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;