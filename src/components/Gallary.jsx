import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const images = gallery.querySelectorAll('img');
    const totalWidth = Array.from(images).reduce((acc, img) => acc + img.offsetWidth + 32, 0);

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(images, {
      x: `-=${totalWidth / 2}`,
      duration: totalWidth / 100,
      ease: 'none'
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div 
        ref={galleryRef}
        className="absolute top-0 left-0 h-full flex items-center gap-8"
        style={{ width: '200%' }}
      >
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/400/300?random=${i}`}
            alt={`Gallery ${i}`}
            className="h-80 w-auto rounded-lg shadow-lg object-cover"
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <img
            key={i + 6}
            src={`https://picsum.photos/400/300?random=${i + 6}`}
            alt={`Gallery ${i + 6}`}
            className="h-80 w-auto rounded-lg shadow-lg object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-transparent to-[#0a192f]" />
    </div>
  );
};

export default Gallery;
