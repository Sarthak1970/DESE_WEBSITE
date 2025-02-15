import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Sponsors = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        x: "-50%",
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/9/96/Intel_logo_%282006%29.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/9/96/Samsung_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
    // "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tesla_Motors.svg",
  ];

  return (
    <div className="py-20 overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Our Sponsors
      </h2>
      <div className="relative mx-auto w-3/4 h-32 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex items-center space-x-16 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Sponsor Logo"
              className="h-16 opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
