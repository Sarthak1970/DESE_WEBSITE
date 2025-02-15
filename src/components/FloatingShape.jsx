import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const FloatingShape = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    const shapes = shapesRef.current;
    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        duration: 8 + index * 2.5,
        x: () => Math.random() * 300 - 150,
        y: () => Math.random() * 300 - 150,
        scale: 1.5,
        opacity: 0.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 1,
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Subtle Background Effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 20, 50, 0.4), rgba(0, 0, 0, 0.6), black)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Galactic Shapes */}
      <div className="absolute w-full h-full">
        {[...Array(6)].map((_, index) => {
          const sizeW = 180 + index * 60;
          const sizeH = 120 + index * 40;
          const top = index % 2 === 0 ? "-30%" : "85%"; 
          const left = index % 2 === 0 ? "-30%" : "85%";

          return (
            <div
              key={index}
              ref={(el) => (shapesRef.current[index] = el)}
              className="absolute blur-[30px] opacity-50"
              style={{
                width: `${sizeW}px`,
                height: `${sizeH}px`,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${
                  index % 2 === 0 ? "#36234f" : "#6f0705"
                } 60%, black 90%)`,
                top,
                left,
              }}
            />
          );
        })}
      </div>

      {/* Cosmic Dots */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6,
          }}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShape;