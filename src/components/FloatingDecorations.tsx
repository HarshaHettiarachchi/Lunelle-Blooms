import { motion } from "framer-motion";

const decorations = [
  {
    type: "🌸",
    left: "5%",
    delay: 0,
    duration: 7,
    size: "text-2xl",
  },
  {
    type: "🌷",
    left: "15%",
    delay: 2,
    duration: 8,
    size: "text-xl",
  },
  {
    type: "🦋",
    left: "28%",
    delay: 4,
    duration: 9,
    size: "text-2xl",
  },
  {
    type: "🌸",
    left: "42%",
    delay: 1,
    duration: 7,
    size: "text-xl",
  },
  {
    type: "🦋",
    left: "55%",
    delay: 5,
    duration: 10,
    size: "text-xl",
  },
  {
    type: "🌷",
    left: "68%",
    delay: 3,
    duration: 8,
    size: "text-2xl",
  },
  {
    type: "🌸",
    left: "80%",
    delay: 1.5,
    duration: 9,
    size: "text-xl",
  },
  {
    type: "🦋",
    left: "92%",
    delay: 6,
    duration: 10,
    size: "text-2xl",
  },
];

export default function FloatingDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">

      {decorations.map((item, index) => (
        <motion.span
          key={index}
          initial={{
            y: "-10vh",
            x: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "115vh",
            x: [0, 35, -25, 30, -15, 0],
            opacity: [0, 0.8, 0.9, 0.8, 0.6, 0],
            rotate: [0, 25, -20, 30, -15, 10],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.15, 0.4, 0.6, 0.85, 1],
          }}
          style={{
            left: item.left,
          }}
          className={`absolute top-0 ${item.size}`}
        >
          {item.type}
        </motion.span>
      ))}

    </div>
  );
}