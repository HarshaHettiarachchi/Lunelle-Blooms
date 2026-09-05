import { motion } from "framer-motion";
import Button from "../components/Button";
import FloatingDecorations from "../components/FloatingDecorations";

const values = [
  {
    icon: "🌸",
    title: "Freshness",
    text: "We choose fresh and beautiful flowers to create every arrangement.",
  },
  {
    icon: "♡",
    title: "Love",
    text: "Every bouquet is carefully arranged with genuine care and love.",
  },
  {
    icon: "🌿",
    title: "Beauty",
    text: "We combine colours, textures, and natural details to create something special.",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen bg-[#FFF8EE] pt-20 overflow-x-hidden">

      {/* ================= FALLING FLOWERS & BUTTERFLIES ================= */}
      <FloatingDecorations />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center max-w-3xl mx-auto"
          >
            <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
              About Lunelle
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#3F5B4B]">
              Flowers With

              <span className="block font-['Allura'] text-[#D98B9A] text-7xl sm:text-8xl font-normal">
                Meaning
              </span>
            </h1>

            <p className="mt-6 text-[#29332D]/70 text-base sm:text-lg leading-8">
              We believe flowers are more than beautiful gifts.
              They are a simple and meaningful way to express love,
              happiness, gratitude, and care.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="relative bg-[#F3D5D9]/30 py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >

              <div className="rounded-[40px] overflow-hidden shadow-xl">

                <img
                  src="/Lunelle-Blooms/images/hero-flower-shop.png"
                  alt="Lunelle Blooms florist"
                  className="w-full h-[520px] object-cover"
                />

              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-6
                  -right-5
                  w-20
                  h-20
                  rounded-full
                  bg-[#D98B9A]
                  flex
                  items-center
                  justify-center
                  text-4xl
                  shadow-lg
                "
              >
                🌷
              </motion.div>

            </motion.div>

            {/* Story */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >

              <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
                Our Story
              </p>

              <h2 className="text-4xl sm:text-5xl text-[#3F5B4B] font-semibold leading-tight">
                A Little

                <span className="font-['Allura'] text-[#D98B9A] text-6xl ml-3 font-normal">
                  Love
                </span>

                <br />

                in Every Bouquet
              </h2>

              <p className="mt-7 text-[#29332D]/70 leading-8">
                Lunelle Blooms was created from a simple idea:
                beautiful flowers can make ordinary moments feel
                extraordinary.
              </p>

              <p className="mt-4 text-[#29332D]/70 leading-8">
                From a thoughtful birthday gift to a romantic
                celebration, we create bouquets that help people
                express the feelings that words sometimes cannot.
              </p>

              <p className="mt-4 text-[#29332D]/70 leading-8">
                Every arrangement is prepared with fresh flowers,
                thoughtful details, and lots of love.
              </p>

              <div className="mt-8">
                <Button
                  text="Explore Our Flowers →"
                  href="/flowers"
                />
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative py-24 bg-[#FFF8EE]">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-20 text-center mb-14"
          >

            <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-4">
              What We Believe
            </p>

            <h2 className="text-4xl sm:text-5xl font-semibold text-[#3F5B4B]">
              Made With

              <span className="font-['Allura'] text-[#D98B9A] text-6xl ml-3 font-normal">
                Heart
              </span>
            </h2>

          </motion.div>

          <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8">

            {values.map((value, index) => (

              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  bg-white
                  rounded-[30px]
                  p-9
                  text-center
                  border
                  border-[#E8DCCB]
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                <div className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-[#F3D5D9]
                  flex
                  items-center
                  justify-center
                  text-3xl
                ">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#3F5B4B]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#29332D]/65">
                  {value.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="relative bg-[#3F5B4B] py-24">

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">

          <div className="text-5xl text-[#D98B9A]">
            “
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-[#FFF8EE] leading-relaxed font-medium">

            Flowers speak the language

            <span className="block font-['Allura'] text-[#F3D5D9] text-6xl sm:text-7xl font-normal">
              of the heart.
            </span>

          </h2>

          <p className="mt-8 text-[#C9A86A] tracking-[3px] uppercase text-sm">
            Flowers Made With Love
          </p>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 bg-[#FFF8EE]">

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">

          <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase">
            Let's Create Something Beautiful
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#3F5B4B]">

            Find Your

            <span className="block font-['Allura'] text-[#D98B9A] text-7xl font-normal">
              Perfect Bouquet
            </span>

          </h2>

          <div className="mt-9">

            <Button
              text="Shop Flowers →"
              href="/flowers"
            />

          </div>

        </div>
      </section>

    </main>
  );
}