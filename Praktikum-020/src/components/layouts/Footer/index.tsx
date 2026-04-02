const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '20px',
            borderTop: '1px solid #ddd',
            marginTop: '20px'
        }}>
            <p>&copy; {new Date().getFullYear()} Praktikum PBF. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
