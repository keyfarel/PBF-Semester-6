const HalamanAdmin = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      minHeight: '100vh', 
      paddingTop: '4rem', 
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', sans-serif" 
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#2a5298', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Dashboard Admin
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2rem' }}>
          Selamat datang di area khusus! Hanya akun dengan hak akses <strong>admin</strong> yang memiliki izin untuk melihat dan mengelola halaman ini.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ backgroundColor: '#f4f7fb', border: '1px solid #cbd5e1', padding: '1.5rem', borderRadius: '8px', width: '200px' }}>
            <h3 style={{ fontSize: '2rem', color: '#2a5298', margin: '0 0 0.5rem 0' }}>150</h3>
            <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Total Produk</span>
          </div>
          <div style={{ backgroundColor: '#f4f7fb', border: '1px solid #cbd5e1', padding: '1.5rem', borderRadius: '8px', width: '200px' }}>
            <h3 style={{ fontSize: '2rem', color: '#2a5298', margin: '0 0 0.5rem 0' }}>42</h3>
            <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Member Aktif</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanAdmin;