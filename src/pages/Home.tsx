import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Button from "../components/Button";

const featuredFlowers = [
  {
    name: "Blush Rose Bouquet",
    price: "¥4,800",
    image: "/Lunelle-Blooms/images/Blush Rose Bouquet.png",
  },
  {
    name: "Spring Tulip Bouquet",
    price: "¥4,200",
    image: "/Lunelle-Blooms/images/Spring Tulip Bouquet.png",
  },
  {
    name: "Golden Sunflowers",
    price: "¥3,800",
    image: "/Lunelle-Blooms/images/Golden Sunflowers.png",
  },
];

const features = [
  {
    icon: "🌿",
    title: "Fresh Flowers",
    text: "Beautiful fresh flowers carefully selected for every bouquet.",
  },
  {
    icon: "♡",
    title: "Made With Love",
    text: "Every arrangement is handmade with care and attention to detail.",
  },
  {
    icon: "🚚",
    title: "Same Day Delivery",
    text: "Send happiness quickly with our convenient flower delivery.",
  },
];

const testimonials = [
  {
    name: "Maya",
    text: "The bouquet was absolutely beautiful. Everything felt so carefully prepared.",
  },
  {
    name: "Emily",
    text: "Lunelle Blooms made my special day even more memorable. Highly recommended!",
  },
  {
    name: "Sakura",
    text: "Beautiful flowers, lovely presentation, and wonderful service.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ================= FEATURED FLOWERS ================= */}
      <section className="bg-[#FFF8EE] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-4">
              Our Favorites
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#3F5B4B]">
              Featured
              <span className="font-['Allura'] text-[#D98B9A] text-6xl sm:text-7xl font-normal ml-3">
                Blooms
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-[#29332D]/65 leading-7">
              Discover some of our most loved bouquets, thoughtfully
              created for beautiful moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {featuredFlowers.map((flower, index) => (
              <motion.div
                key={flower.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#3F5B4B]">
                    {flower.name}
                  </h3>

                  <span className="text-[#C9A86A] font-semibold">
                    {flower.price}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>

          <div className="text-center mt-12">
            <Button
              text="View All Flowers →"
              href="/flowers"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#F3D5D9]/35 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-4">
              Why Lunelle
            </p>

            <h2 className="text-4xl sm:text-5xl text-[#3F5B4B] font-semibold">
              Flowers With
              <span className="font-['Allura'] text-[#D98B9A] text-6xl ml-3 font-normal">
                Heart
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-[#FFF8EE] rounded-[30px] p-9 text-center border border-[#E8DCCB] hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F3D5D9] flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#3F5B4B]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#29332D]/65">
                  {feature.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="bg-[#FFF8EE] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[35px] overflow-hidden"
            >
              <img
                src="/Lunelle-Blooms/images/hero-flower-shop.png"
                alt="Lunelle Blooms florist"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
                Our Story
              </p>

              <h2 className="text-4xl sm:text-5xl text-[#3F5B4B] font-semibold leading-tight">
                Every Flower
                <span className="block font-['Allura'] text-[#D98B9A] text-6xl font-normal">
                  Has a Story
                </span>
              </h2>

              <p className="mt-6 text-[#29332D]/70 leading-8">
                At Lunelle Blooms, we believe flowers have a beautiful
                way of expressing feelings that words sometimes cannot.
              </p>

              <p className="mt-4 text-[#29332D]/70 leading-8">
                From romantic bouquets to simple thoughtful gifts,
                every arrangement is created with freshness, beauty,
                and love.
              </p>

              <div className="mt-8">
                <Button
                  text="Discover Our Story →"
                  href="/about"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#3F5B4B] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-4">
              Kind Words
            </p>

            <h2 className="text-4xl sm:text-5xl text-[#FFF8EE] font-semibold">
              Loved By Our
              <span className="font-['Allura'] text-[#F3D5D9] text-6xl ml-3 font-normal">
                Customers
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-[#FFF8EE] rounded-[30px] p-8"
              >
                <div className="text-[#C9A86A] text-xl">
                  ★★★★★
                </div>

                <p className="mt-5 text-[#29332D]/70 leading-7">
                  “{testimonial.text}”
                </p>

                <p className="mt-6 font-semibold text-[#3F5B4B]">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#FFF8EE] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase">
            Make Someone Smile
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#3F5B4B]">
            Give the Gift of
            <span className="block font-['Allura'] text-[#D98B9A] text-7xl font-normal">
              Flowers
            </span>
          </h2>

          <p className="mt-5 text-[#29332D]/65 leading-7">
            Because sometimes, a beautiful bouquet says everything.
          </p>

          <div className="mt-9">
            <Button
              text="Explore Our Flowers →"
              href="/flowers"
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}