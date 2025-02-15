import React from "react";
import { motion } from "framer-motion";

const FloatingShape = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Falling Snow Dots */}
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-[3px] h-[3px] bg-white rounded-full"
          style={{
            top: `-${Math.random() * 20}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: ["0%", `${(Math.random() - 0.5) * 20}%`],
            opacity: [0.7, 0.3]
          }}
          transition={{
            duration: Math.random() * 7 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * -10
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShape;
