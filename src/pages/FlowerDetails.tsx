import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const flowers = [
  {
    name: "Blush Rose Bouquet",
    category: "Roses",
    price: "¥4,800",
    image: "/images/Blush Rose Bouquet.png",
    description:
      "Soft pink roses arranged with delicate greenery and baby's breath.",
  },
  {
    name: "Spring Tulip Bouquet",
    category: "Tulips",
    price: "¥4,200",
    image: "/images/Spring Tulip Bouquet.png",
    description:
      "Fresh pastel tulips creating a bright and cheerful bouquet.",
  },
  {
    name: "Golden Sunflowers",
    category: "Sunflowers",
    price: "¥3,800",
    image: "/images/Golden Sunflowers.png",
    description:
      "Cheerful sunflowers bringing warmth and sunshine to every moment.",
  },
  {
    name: "Romantic Garden",
    category: "Bouquets",
    price: "¥5,500",
    image: "/images/Romantic Garden.png",
    description:
      "A romantic mix of seasonal flowers with soft pastel colours.",
  },
  {
    name: "Pure White Blooms",
    category: "Bouquets",
    price: "¥4,600",
    image: "/images/Pure White Blooms.png",
    description:
      "Elegant white flowers designed for timeless and special moments.",
  },
  {
    name: "Pink Love",
    category: "Roses",
    price: "¥5,200",
    image: "/images/Pink Love.png",
    description:
      "A beautiful pink arrangement created especially with love.",
  },
];

export default function FlowerDetails() {
  const { flowerName } = useParams();

  const flower = flowers.find(
    (item) => item.name === decodeURIComponent(flowerName || "")
  );

  if (!flower) {
    return (
      <main className="min-h-screen bg-[#FFF8EE] pt-32 px-6">
        <div className="max-w-3xl mx-auto text-center py-20">
          <p className="text-5xl">🌸</p>

          <h1 className="mt-6 text-4xl font-semibold text-[#3F5B4B]">
            Flower Not Found
          </h1>

          <Link
            to="/flowers"
            className="inline-block mt-8 rounded-full bg-[#3F5B4B] text-[#FFF8EE] px-7 py-3"
          >
            ← Back to Flowers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8EE] pt-20 overflow-x-hidden">

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <Link
            to="/flowers"
            className="inline-flex items-center gap-2 text-sm text-[#3F5B4B] hover:text-[#D98B9A] transition-colors"
          >
            ← Back to Flowers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-10">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-[500px] sm:h-[600px] object-cover"
                />
              </div>

              <span className="absolute top-6 left-6 px-5 py-2 rounded-full bg-[#FFF8EE]/95 text-[#3F5B4B] text-sm shadow-md">
                {flower.category}
              </span>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase">
                Lunelle Blooms
              </p>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#3F5B4B] leading-tight">
                {flower.name}
              </h1>

              <p className="mt-5 text-3xl font-semibold text-[#D98B9A]">
                {flower.price}
              </p>

              <p className="mt-7 text-[#29332D]/70 leading-8 text-lg">
                {flower.description}
              </p>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="rounded-2xl bg-[#F3D5D9]/50 p-4 text-center">
                  <span className="text-2xl">🌿</span>
                  <p className="mt-2 text-xs text-[#3F5B4B]">
                    Fresh
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F3D5D9]/50 p-4 text-center">
                  <span className="text-2xl">♡</span>
                  <p className="mt-2 text-xs text-[#3F5B4B]">
                    Handmade
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F3D5D9]/50 p-4 text-center">
                  <span className="text-2xl">🚚</span>
                  <p className="mt-2 text-xs text-[#3F5B4B]">
                    Delivery
                  </p>
                </div>

              </div>

              {/* Order Button */}
              <div className="mt-10">
                <Link
                  to={`/contact?flower=${encodeURIComponent(flower.name)}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    sm:w-auto
                    px-10
                    py-4
                    rounded-full
                    bg-[#3F5B4B]
                    text-[#FFF8EE]
                    font-medium
                    tracking-wide
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-[#D98B9A]
                    hover:scale-105
                  "
                >
                  Order This Bouquet →
                </Link>
              </div>

              <p className="mt-5 text-sm text-[#29332D]/50">
                ✨ Carefully prepared with love for your special moment.
              </p>

            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}