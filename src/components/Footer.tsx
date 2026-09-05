import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Flowers", path: "/flowers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const flowerCategories = [
  "Roses",
  "Tulips",
  "Sunflowers",
  "Wedding Bouquets",
];

export default function Footer() {
  return (
    <footer className="bg-[#3F5B4B] text-[#FFF8EE]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= BRAND ================= */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <img
                src="/Lunelle-Blooms/images/logo.png"
                alt="Lunelle Blooms"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h2 className="text-xl font-semibold tracking-wide">
                  Lunelle Blooms
                </h2>

                <p className="text-[9px] tracking-[3px] uppercase text-[#C9A86A] mt-1">
                  Flowers Made With Love
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-[#FFF8EE]/75 max-w-xs">
              Beautiful flowers for beautiful moments. We create
              fresh, elegant bouquets made with love and care.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F3D5D9]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-[#FFF8EE]/75 hover:text-[#F3D5D9] transition-all duration-300"
                  >
                    <span className="text-[#C9A86A] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= FLOWER CATEGORIES ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F3D5D9]">
              Our Flowers
            </h3>

            <ul className="space-y-3">
              {flowerCategories.map((category) => (
                <li key={category}>
                  <Link
                    to="/flowers"
                    className="text-sm text-[#FFF8EE]/75 hover:text-[#F3D5D9] transition-colors duration-300"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F3D5D9]">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-[#FFF8EE]/75">

              <p className="flex gap-3">
                <span className="text-[#C9A86A]">📍</span>
                <span>Kyoto, Japan</span>
              </p>

              <p className="flex gap-3">
                <span className="text-[#C9A86A]">📞</span>
                <span>+81 80 1234 5678</span>
              </p>

              <p className="flex gap-3">
                <span className="text-[#C9A86A]">✉</span>
                <span>hello@lunelleblooms.com</span>
              </p>

              <p className="flex gap-3">
                <span className="text-[#C9A86A]">🕐</span>
                <span>Every Day: 9:00 AM – 7:00 PM</span>
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#FFF8EE]/30 flex items-center justify-center hover:bg-[#D98B9A] hover:border-[#D98B9A] transition-all duration-300"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#FFF8EE]/30 flex items-center justify-center hover:bg-[#D98B9A] hover:border-[#D98B9A] transition-all duration-300"
              >
                f
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full border border-[#FFF8EE]/30 flex items-center justify-center hover:bg-[#D98B9A] hover:border-[#D98B9A] transition-all duration-300"
              >
                ♪
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[#FFF8EE]/15">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-[#FFF8EE]/60 text-center sm:text-left">
            © {new Date().getFullYear()} Lunelle Blooms. All rights reserved.
          </p>

          <p className="text-sm font-['Allura'] text-[#C9A86A]">
            Flowers Made With Love
          </p>

        </div>
      </div>

    </footer>
  );
}