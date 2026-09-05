import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import FloatingDecorations from "../components/FloatingDecorations";

const flowerOptions = [
  "Blush Rose Bouquet",
  "Spring Tulip Bouquet",
  "Golden Sunflowers",
  "Romantic Garden",
  "Pure White Blooms",
  "Pink Love",
];

export default function Contact() {
  const [searchParams] = useSearchParams();

  const selectedFlower = searchParams.get("flower") || "";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="relative min-h-screen bg-[#FFF8EE] pt-20 overflow-x-hidden">

      {/* ================= FALLING FLOWERS & BUTTERFLIES ================= */}

      <FloatingDecorations />

      {/* ================= HERO ================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
              {selectedFlower ? "Place Your Order" : "Get In Touch"}
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#3F5B4B] leading-tight">
              {selectedFlower ? (
                <>
                  Order Something

                  <span className="block font-['Allura'] text-[#D98B9A] text-7xl sm:text-8xl font-normal">
                    Beautiful
                  </span>
                </>
              ) : (
                <>
                  Let's Create

                  <span className="block font-['Allura'] text-[#D98B9A] text-7xl sm:text-8xl font-normal">
                    Something Beautiful
                  </span>
                </>
              )}
            </h1>

            <p className="mt-6 text-[#29332D]/70 text-base sm:text-lg leading-8">
              {selectedFlower
                ? "Complete the form below and we will carefully prepare your beautiful bouquet."
                : "Have a question, special request, or simply want to send someone beautiful flowers? We would love to hear from you."}
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= CONTACT / ORDER SECTION ================= */}

      <section className="bg-[#F3D5D9]/30 py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ================= LEFT SIDE ================= */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
                Lunelle Blooms
              </p>

              <h2 className="text-4xl sm:text-5xl font-semibold text-[#3F5B4B] leading-tight">
                Flowers Made

                <span className="block font-['Allura'] text-[#D98B9A] text-6xl font-normal">
                  With Love
                </span>
              </h2>

              <p className="mt-6 text-[#29332D]/70 leading-8 max-w-lg">
                Whether you are ordering a bouquet for someone special
                or planning a beautiful event, we are here to make
                every moment memorable.
              </p>

              {/* ================= CONTACT DETAILS ================= */}

              <div className="mt-10 space-y-5">

                {/* Location */}

                <div className="flex items-center gap-5 bg-[#FFF8EE] rounded-2xl p-5 border border-[#E8DCCB]">

                  <div className="w-12 h-12 rounded-full bg-[#F3D5D9] flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[2px] text-[#C9A86A]">
                      Visit Us
                    </p>

                    <p className="mt-1 text-[#3F5B4B] font-medium">
                      Kyoto, Japan
                    </p>
                  </div>

                </div>

                {/* Phone */}

                <div className="flex items-center gap-5 bg-[#FFF8EE] rounded-2xl p-5 border border-[#E8DCCB]">

                  <div className="w-12 h-12 rounded-full bg-[#F3D5D9] flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[2px] text-[#C9A86A]">
                      Call Us
                    </p>

                    <p className="mt-1 text-[#3F5B4B] font-medium">
                      +81 80 1234 5678
                    </p>
                  </div>

                </div>

                {/* Email */}

                <div className="flex items-center gap-5 bg-[#FFF8EE] rounded-2xl p-5 border border-[#E8DCCB]">

                  <div className="w-12 h-12 rounded-full bg-[#F3D5D9] flex items-center justify-center text-xl shrink-0">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[2px] text-[#C9A86A]">
                      Email Us
                    </p>

                    <p className="mt-1 text-[#3F5B4B] font-medium">
                      hello@lunelleblooms.com
                    </p>
                  </div>

                </div>

                {/* Opening Hours */}

                <div className="flex items-center gap-5 bg-[#FFF8EE] rounded-2xl p-5 border border-[#E8DCCB]">

                  <div className="w-12 h-12 rounded-full bg-[#F3D5D9] flex items-center justify-center text-xl shrink-0">
                    🕐
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[2px] text-[#C9A86A]">
                      Opening Hours
                    </p>

                    <p className="mt-1 text-[#3F5B4B] font-medium">
                      Every Day · 9:00 AM – 7:00 PM
                    </p>
                  </div>

                </div>

              </div>

              {/* Quote */}

              <p className="mt-10 text-2xl font-['Allura'] text-[#C9A86A]">
                Flowers Made With Love ♡
              </p>

            </motion.div>

            {/* ================= ORDER FORM ================= */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#FFF8EE] rounded-[35px] p-7 sm:p-10 border border-[#E8DCCB] shadow-xl"
            >

              <div className="mb-8">

                <h2 className="text-3xl font-semibold text-[#3F5B4B]">
                  {selectedFlower
                    ? "Order Your Bouquet"
                    : "Send Us a Message"}
                </h2>

                <p className="mt-2 text-sm text-[#29332D]/60">
                  {selectedFlower
                    ? "Please provide your details and delivery information."
                    : "Tell us what you are looking for and we will be happy to help."}
                </p>

              </div>

              {/* ================= FORM ================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* ================= NAME ================= */}

                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  />

                </div>

                {/* ================= EMAIL ================= */}

                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  />

                </div>

                {/* ================= PHONE ================= */}

                <div>

                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+81 ..."
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  />

                </div>

                {/* ================= FLOWER ================= */}

                <div>

                  <label
                    htmlFor="flower"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Select Bouquet
                  </label>

                  <select
                    id="flower"
                    name="flower"
                    defaultValue={selectedFlower}
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  >

                    <option value="" disabled>
                      Select a bouquet
                    </option>

                    {flowerOptions.map((flower) => (
                      <option key={flower} value={flower}>
                        {flower}
                      </option>
                    ))}

                  </select>

                </div>

                {/* ================= DELIVERY DATE ================= */}

                <div>

                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Delivery Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  />

                </div>

                {/* ================= DELIVERY TIME ================= */}

                <div>

                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Preferred Delivery Time
                  </label>

                  <select
                    id="time"
                    name="time"
                    defaultValue=""
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  >

                    <option value="" disabled>
                      Select delivery time
                    </option>

                    <option value="morning">
                      9:00 AM – 12:00 PM
                    </option>

                    <option value="afternoon">
                      12:00 PM – 3:00 PM
                    </option>

                    <option value="evening">
                      3:00 PM – 7:00 PM
                    </option>

                  </select>

                </div>

                {/* ================= ADDRESS ================= */}

                <div>

                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Delivery Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={3}
                    placeholder="Enter delivery address"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      resize-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  />

                </div>

                {/* ================= MESSAGE ================= */}

                <div>

                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#3F5B4B] mb-2"
                  >
                    Special Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Add a message for the recipient..."
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E8DCCB]
                      bg-white
                      px-5
                      py-4
                      text-[#29332D]
                      outline-none
                      resize-none
                      transition-all
                      duration-300
                      focus:border-[#D98B9A]
                      focus:ring-2
                      focus:ring-[#D98B9A]/20
                    "
                  />

                </div>

                {/* ================= SUBMIT ================= */}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full
                    rounded-full
                    bg-[#3F5B4B]
                    text-[#FFF8EE]
                    py-4
                    font-medium
                    tracking-wide
                    shadow-md
                    transition-colors
                    duration-300
                    hover:bg-[#D98B9A]
                  "
                >
                  {selectedFlower
                    ? "Place Flower Order →"
                    : "Send Message →"}
                </motion.button>

                {/* ================= SUCCESS MESSAGE ================= */}

                {submitted && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    className="
                      rounded-2xl
                      bg-[#DDE9DF]
                      border
                      border-[#8FAF9A]
                      p-5
                      text-center
                      text-[#3F5B4B]
                    "
                  >

                    <div className="text-3xl mb-2">
                      🌸
                    </div>

                    <p className="font-semibold">
                      Thank You!
                    </p>

                    <p className="text-sm mt-1">
                      {selectedFlower
                        ? "Your flower order request has been received."
                        : "Your message has been received."}
                    </p>

                  </motion.div>
                )}

              </form>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="bg-[#3F5B4B] py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-[#C9A86A] text-sm tracking-[4px] uppercase mb-5">
            Let's Make Someone Smile
          </p>

          <h2 className="text-4xl sm:text-5xl text-[#FFF8EE] font-semibold">

            Beautiful Flowers

            <span className="block font-['Allura'] text-[#F3D5D9] text-6xl sm:text-7xl font-normal">
              Beautiful Moments
            </span>

          </h2>

          <p className="mt-6 text-[#FFF8EE]/70 leading-7">
            Every bouquet tells a story. Let us help you tell yours.
          </p>

        </div>

      </section>

    </main>
  );
}