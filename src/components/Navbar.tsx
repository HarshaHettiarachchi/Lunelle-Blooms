import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Flowers", path: "/flowers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF8EE]/95 backdrop-blur-md shadow-md"
            : "bg-[#FFF8EE]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-20 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/Lunelle-Blooms/images/logo.png"
              alt="Lunelle Blooms"
              className="w-12 h-12 object-contain"
            />

            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold tracking-wide text-[#3F5B4B]">
                Lunelle Blooms
              </h1>

              <p className="text-[9px] tracking-[3px] uppercase text-[#C9A86A]">
                Flowers Made With Love
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="
                  group
                  relative
                  h-14
                  min-w-[90px]
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                {/* NORMAL TEXT */}
                <span
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[#3F5B4B]
                    text-[17px]
                    font-medium
                    tracking-wide
                    transition-all
                    duration-500
                    ease-out
                    group-hover:-translate-y-full
                    group-hover:opacity-0
                  "
                >
                  {link.name}
                </span>

                {/* CURSIVE TEXT */}
                <span
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[#3F5B4B]
                    text-[28px]
                    leading-none
                    font-['Allura']
                    whitespace-nowrap
                    transition-all
                    duration-500
                    ease-out
                    translate-y-full
                    opacity-0
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {link.name}
                </span>

                {/* UNDERLINE */}
                <span
                  className="
                    absolute
                    left-1/2
                    bottom-1
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#D98B9A]
                    transition-all
                    duration-500
                    group-hover:w-[75%]
                  "
                />
              </Link>
            ))}
          </nav>

          {/* ================= SHOP BUTTON ================= */}
          <div className="hidden lg:block">
            <Button
              text="Shop Now"
              href="/flowers"
              className="px-6 py-2.5"
            />
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              lg:hidden
              w-11
              h-11
              rounded-full
              bg-[#3F5B4B]
              flex
              flex-col
              items-center
              justify-center
              gap-1.5
            "
          >
            <span
              className={`w-5 h-[2px] bg-[#FFF8EE] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />

            <span
              className={`w-5 h-[2px] bg-[#FFF8EE] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`w-5 h-[2px] bg-[#FFF8EE] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* ================= MOBILE MENU ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-[380px] bg-[#FFF8EE] lg:hidden transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">

          {/* MOBILE HEADER */}
          <div className="h-24 px-6 flex items-center justify-between border-b border-[#E8DCCB]">
            <div>
              <h2 className="text-xl font-semibold text-[#3F5B4B]">
                Lunelle Blooms
              </h2>

              <p className="text-[9px] tracking-[3px] uppercase text-[#C9A86A] mt-1">
                Flowers Made With Love
              </p>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="
                w-10
                h-10
                rounded-full
                bg-[#3F5B4B]
                text-[#FFF8EE]
                flex
                items-center
                justify-center
                text-lg
                transition-transform
                duration-300
                hover:rotate-90
              "
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* MOBILE LINKS */}
          <nav className="px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  py-5
                  border-b
                  border-[#E8DCCB]
                  text-2xl
                  text-[#3F5B4B]
                  transition-all
                  duration-300
                "
              >
                <span
                  className="
                    transition-all
                    duration-300
                    group-hover:text-[#D98B9A]
                    group-hover:translate-x-2
                    group-hover:font-['Allura']
                    group-hover:text-4xl
                  "
                >
                  {link.name}
                </span>

                <span
                  className="
                    text-[#C9A86A]
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <div className="mt-auto px-6 pb-10">
            <Button
              text="Shop Flowers"
              href="/flowers"
              className="w-full"
            />

            <p className="text-center text-xs tracking-[3px] uppercase text-[#3F5B4B]/60 mt-6">
              Fresh • Beautiful • Delivered
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}