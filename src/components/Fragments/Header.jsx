import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Elements/Logo/Logo";
import NavbarMenu from "../Elements/Menu/Menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-40 ${
        isScrolled
          ? "bg-gradient-to-b from-zinc-900 to-zinc-900/0 transition duration-300 ease-in-out"
          : "transition duration-300 ease-in-out"
      }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center md:px-6 md:grid md:grid-cols-[2fr,3fr]">
        <Logo />
        <NavbarMenu />
      </div>
    </header>
  );
};

export default Navbar;
