import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../navbar"), {
  ssr: false,
  loading: () => <p style={{ textAlign: "center", padding: "1rem", color: "#64748b" }}>Memuat navigasi...</p>,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const disableNavbar = [
  "/auth/login",
  "/auth/register",
  "/404",
];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  const { pathname } = router;

  return (
    <main className={roboto.className}>
      <style jsx global>{`
        html, body {
          font-family: ${roboto.style.fontFamily} !important;
        }
      `}</style>

      <Script 
        strategy="lazyOnload" 
        src={`https://www.googletagmanager.com/gtag/js?id=G-TUGASPRAKTIKUM`} 
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TUGASPRAKTIKUM', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {!disableNavbar.includes(pathname) && <Navbar />}
      
      {children}
    </main>
  );
};

export default AppShell;