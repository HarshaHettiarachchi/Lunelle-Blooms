import { motion } from "framer-motion";
import Button from "./Button";
import FlowerPetals from "./FlowerPetals";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FFF8EE] overflow-hidden pt-20">

      {/* ================= FLOWING PETALS ================= */}
      <FlowerPetals />

      {/* ================= BACKGROUND DECORATIONS ================= */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-28 left-10 text-4xl opacity-50 pointer-events-none"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-10 text-3xl opacity-40 pointer-events-none"
      >
        🌿
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="max-w-7xl mx-auto min-h-[calc(100vh-80px)] px-6 sm:px-8 lg:px-10 flex items-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="text-center lg:text-left"
          >

            {/* Small Heading */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5"
            >
              Fresh Flowers • Made With Love
            </motion.p>

            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight text-[#3F5B4B]"
            >
              Beautiful

              <span className="block font-['Allura'] text-6xl sm:text-7xl lg:text-8xl text-[#D98B9A] font-normal">
                Flowers
              </span>

              for Beautiful Moments.
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="mt-6 max-w-lg mx-auto lg:mx-0 text-[#29332D]/70 text-base sm:text-lg leading-8"
            >
              Discover elegant bouquets created with fresh flowers,
              thoughtful details, and a little touch of love.
            </motion.p>

            {/* ================= FEATURES ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.7,
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8"
            >

              <div className="flex items-center gap-2 text-sm text-[#3F5B4B]">
                <span className="text-xl">🌿</span>
                Fresh Flowers
              </div>

              <div className="flex items-center gap-2 text-sm text-[#3F5B4B]">
                <span className="text-xl">♡</span>
                Handmade With Love
              </div>

              <div className="flex items-center gap-2 text-sm text-[#3F5B4B]">
                <span className="text-xl">🚚</span>
                Same Day Delivery
              </div>

            </motion.div>

            {/* ================= CTA ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="mt-9"
            >
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                <Button
                  text="Explore Flowers →"
                  href="/flowers"
                  className="px-8 py-3.5"
                />
              </motion.div>
            </motion.div>

            {/* Handwritten Text */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.1,
                duration: 1,
              }}
              className="mt-7 text-2xl font-['Allura'] text-[#C9A86A]"
            >
              Bloom a Kinder World ♡
            </motion.p>

          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: [0.92, 1, 1.01, 1],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              x: {
                duration: 0.9,
                ease: "easeOut",
              },
              scale: {
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 0.75, 1],
              },
            }}
            className="relative"
          >

            {/* Image Container */}

            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">

              <motion.img
                src="/Lunelle-Blooms/images/hero-flower-shop.png"
                alt="Lunelle Blooms florist arranging flowers"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-[500px] sm:h-[600px] lg:h-[650px] object-cover"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#3F5B4B]/20 to-transparent pointer-events-none" />

            </div>

            {/* ================= FLOATING FLOWER ================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -top-5
                -left-5
                w-16
                h-16
                rounded-full
                bg-[#F3D5D9]
                flex
                items-center
                justify-center
                text-3xl
                shadow-lg
              "
            >
              🌷
            </motion.div>

            {/* ================= FLOATING BADGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.2,
                duration: 0.5,
              }}
              className="
                absolute
                -bottom-5
                -right-5
                bg-[#FFF8EE]
                rounded-2xl
                shadow-xl
                px-6
                py-4
              "
            >

              <p className="text-xs uppercase tracking-[2px] text-[#C9A86A]">
                Made With
              </p>

              <p className="text-xl font-['Allura'] text-[#3F5B4B]">
                Love ♡
              </p>

            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* ================= BOTTOM DECORATIONS ================= */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-[8%] text-2xl opacity-40 pointer-events-none"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-[10%] text-xl opacity-40 pointer-events-none"
      >
        🌸
      </motion.div>

    </section>
  );
}