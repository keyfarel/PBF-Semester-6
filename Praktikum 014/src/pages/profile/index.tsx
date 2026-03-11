import Head from "next/head";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session }: any = useSession();

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <div style={{ padding: "20px" }}>
        <h1>Profile Page</h1>
        {session && (
          <div>
            <p><strong>Nama:</strong> {session.user?.fullname}</p>
            <p><strong>Email:</strong> {session.user?.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;