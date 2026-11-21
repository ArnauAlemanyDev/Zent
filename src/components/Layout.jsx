import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const section = hash && document.getElementById(hash.slice(1));
    if (section) {
      section.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: "instant" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      <ScrollToTop />
      <Navbar />
      <main className="overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
