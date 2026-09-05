import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "../components/Button";
import FloatingDecorations from "../components/FloatingDecorations";

interface Flower {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

const flowers: Flower[] = [
  {
    name: "Blush Rose Bouquet",
    category: "Roses",
    price: "¥4,800",
    image: "/Lunelle-Blooms/images/Blush Rose Bouquet.png",
    description:
      "Soft pink roses arranged with delicate greenery and baby's breath.",
  },
  {
    name: "Spring Tulip Bouquet",
    category: "Tulips",
    price: "¥4,200",
    image: "/Lunelle-Blooms/images/Spring Tulip Bouquet.png",
    description:
      "Fresh pastel tulips creating a bright and cheerful bouquet.",
  },
  {
    name: "Golden Sunflowers",
    category: "Sunflowers",
    price: "¥3,800",
    image: "/Lunelle-Blooms/images/Golden Sunflowers.png",
    description:
      "Cheerful sunflowers bringing warmth and sunshine to every moment.",
  },
  {
    name: "Romantic Garden",
    category: "Bouquets",
    price: "¥5,500",
    image: "/Lunelle-Blooms/images/Romantic Garden.png",
    description:
      "A romantic mix of seasonal flowers with soft pastel colours.",
  },
  {
    name: "Pure White Blooms",
    category: "Bouquets",
    price: "¥4,600",
    image: "/Lunelle-Blooms/images/Pure White Blooms.png",
    description:
      "Elegant white flowers designed for timeless and special moments.",
  },
  {
    name: "Pink Love",
    category: "Roses",
    price: "¥5,200",
    image: "/Lunelle-Blooms/images/Pink Love.png",
    description:
      "A beautiful pink arrangement created especially with love.",
  },
];

const categories = [
  "All Flowers",
  "Roses",
  "Tulips",
  "Sunflowers",
  "Bouquets",
];

export default function Flowers() {
  const [selectedCategory, setSelectedCategory] = useState("All Flowers");

  const filteredFlowers =
    selectedCategory === "All Flowers"
      ? flowers
      : flowers.filter(
          (flower) => flower.category === selectedCategory
        );

  return (
    <main className="relative min-h-screen bg-[#FFF8EE] pt-20 overflow-x-hidden">

      {/* ================= FLOATING FLOWERS & BUTTERFLIES ================= */}
      <FloatingDecorations />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto relative z-20"
          >
            <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
              Our Collection
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#3F5B4B] leading-tight">
              Find Your

              <span className="block font-['Allura'] text-[#D98B9A] text-6xl sm:text-7xl lg:text-8xl font-normal">
                Perfect Flowers
              </span>
            </h1>

            <p className="mt-6 text-[#29332D]/70 text-base sm:text-lg leading-8">
              Explore our carefully selected collection of fresh,
              beautiful flowers made for every special moment.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="relative z-20 pb-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-6
                    py-3
                    rounded-full
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-[#3F5B4B] text-[#FFF8EE] shadow-md scale-105"
                        : "bg-[#F3D5D9]/60 text-[#3F5B4B] hover:bg-[#D98B9A] hover:text-white"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= FLOWER GRID ================= */}
      <section className="relative z-20 pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <AnimatePresence mode="popLayout">

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >

              {filteredFlowers.map((flower, index) => (

                <motion.article
                  layout
                  key={flower.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    bg-white
                    rounded-[30px]
                    overflow-hidden
                    border
                    border-[#E8DCCB]
                    shadow-sm
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >

                  {/* ================= IMAGE ================= */}
                  <div className="relative h-80 overflow-hidden bg-[#F3D5D9]">

                    <img
                      src={flower.image}
                      alt={flower.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/20
                        via-transparent
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    {/* Category */}
                    <span
                      className="
                        absolute
                        top-5
                        left-5
                        px-4
                        py-2
                        rounded-full
                        bg-[#FFF8EE]/95
                        text-[#3F5B4B]
                        text-xs
                        tracking-wide
                        shadow-sm
                      "
                    >
                      {flower.category}
                    </span>

                    {/* Favourite */}
                    <button
                      aria-label={`Add ${flower.name} to favourites`}
                      className="
                        absolute
                        top-5
                        right-5
                        w-11
                        h-11
                        rounded-full
                        bg-white/90
                        text-[#D98B9A]
                        text-2xl
                        flex
                        items-center
                        justify-center
                        shadow-md
                        transition-all
                        duration-300
                        hover:bg-[#D98B9A]
                        hover:text-white
                        hover:scale-110
                      "
                    >
                      ♡
                    </button>

                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-7">

                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <h2 className="text-xl font-semibold text-[#3F5B4B]">
                          {flower.name}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-[#29332D]/60">
                          {flower.description}
                        </p>
                      </div>

                      <span
                        className="
                          text-lg
                          font-semibold
                          text-[#C9A86A]
                          whitespace-nowrap
                        "
                      >
                        {flower.price}
                      </span>

                    </div>

                    {/* ================= DETAILS BUTTON ================= */}
                    <div className="mt-6">
                      <Button
                        text="View Details →"
                        href={`/flowers/${encodeURIComponent(
                          flower.name
                        )}`}
                        className="w-full"
                      />
                    </div>

                  </div>

                </motion.article>

              ))}

            </motion.div>

          </AnimatePresence>

          {/* ================= NO RESULTS ================= */}
          {filteredFlowers.length === 0 && (
            <div className="text-center py-20">

              <p className="text-5xl mb-5">
                🌸
              </p>

              <h2 className="text-2xl font-semibold text-[#3F5B4B]">
                No flowers found
              </h2>

              <p className="mt-3 text-[#29332D]/60">
                Please choose another category.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative z-20 bg-[#3F5B4B]">

        <div className="max-w-4xl mx-auto px-6 py-20 text-center">

          <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
            Made With Love
          </p>

          <h2 className="text-4xl sm:text-5xl text-[#FFF8EE] font-semibold">
            Send Someone

            <span className="block font-['Allura'] text-[#F3D5D9] text-6xl font-normal mt-2">
              A Little Happiness
            </span>
          </h2>

          <p className="mt-5 text-[#FFF8EE]/70 leading-7">
            Choose a beautiful bouquet and make someone's day
            a little brighter.
          </p>

          <div className="mt-8">
            <Button
              text="Contact Us →"
              href="/contact"
              className="
                bg-[#D98B9A]
                hover:bg-[#FFF8EE]
                hover:text-[#3F5B4B]
              "
            />
          </div>

        </div>

      </section>

    </main>
  );
}