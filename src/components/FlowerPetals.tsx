import { motion } from "framer-motion";

const petals = [
  { left: "8%", delay: 0, duration: 7, size: "text-xl" },
  { left: "20%", delay: 2, duration: 9, size: "text-sm" },
  { left: "35%", delay: 1, duration: 8, size: "text-lg" },
  { left: "52%", delay: 3, duration: 10, size: "text-sm" },
  { left: "68%", delay: 0.5, duration: 8, size: "text-xl" },
  { left: "82%", delay: 2.5, duration: 9, size: "text-sm" },
  { left: "94%", delay: 4, duration: 7, size: "text-lg" },
];

export default function FlowerPetals() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal, index) => (
        <motion.span
          key={index}
          initial={{
            y: "-10vh",
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            x: [0, 30, -25, 20, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0, 0.7, 0.8, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: petal.left }}
          className={`absolute top-0 ${petal.size}`}
        >
          🌸
        </motion.span>
      ))}
    </div>
  );
}