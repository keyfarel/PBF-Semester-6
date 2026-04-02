// src/pages/editor/index.tsx
import { useSession } from "next-auth/react";
import Head from "next/head";

const EditorDashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const role = (session?.user as any)?.role;
  const fullname = (session?.user as any)?.fullname;

  return (
    <div style={{ padding: "2rem 5%", minHeight: "80vh", backgroundColor: "#f8fafc", color: "#1f2937" }}>
      <Head>
        <title>Editor Dashboard | MyApp</title>
      </Head>

      <div style={{ backgroundColor: "#ffffff", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ borderBottom: "2px solid #e5e7eb", paddingBottom: "1rem", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", color: "#c084fc", margin: 0 }}>Editor Workspace</h1>
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            Selamat datang, <strong>{fullname}</strong>! Anda login sebagai <span style={{ backgroundColor: "#f3e8ff", color: "#9333ea", padding: "2px 8px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase" }}>{role}</span>.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {/* Card 1 */}
          <div style={{ padding: "1.5rem", border: "1px solid #e5e7eb", borderRadius: "8px", backgroundColor: "#fdf8ff" }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#7e22ce" }}>📝 Tulis Artikel Baru</h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>Buat konten baru untuk dipublikasikan di blog atau aplikasi.</p>
            <button style={{ marginTop: "15px", padding: "8px 16px", backgroundColor: "#a855f7", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>Mulai Menulis</button>
          </div>

          {/* Card 2 */}
          <div style={{ padding: "1.5rem", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#2563eb" }}>🔍 Review Konten</h3>
            <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>Periksa dan edit draf artikel yang dikirim oleh penulis lain.</p>
            <button style={{ marginTop: "15px", padding: "8px 16px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>Lihat Daftar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorDashboard;