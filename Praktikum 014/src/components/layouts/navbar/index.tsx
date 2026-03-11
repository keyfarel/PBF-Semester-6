import styles from "../../../styles/navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.navbar}>
      <div className="big">
        <h1>Navbar Component</h1>
      </div>

      <div>
        {session ? (
          <div>
            <span style={{ marginRight: '10px' }}>Halo, {(session.user as any)?.fullname || session.user?.email}</span>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;