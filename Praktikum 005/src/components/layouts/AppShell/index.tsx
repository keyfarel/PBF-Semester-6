import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = [
  "/auth/login",
  "/auth/register",
];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  const { pathname } = router;

  // console.log("Router Object:", router);
  // console.log("Current Pathname:", pathname);

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;