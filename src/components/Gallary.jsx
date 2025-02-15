import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const galleryRef = useRef(null);
  const tl = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const images = [
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553511/Images_in_about_us_p1_b9avno.jpg',
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553515/Images_in_about_us_p2_jsvalz.jpg',
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553519/Images_in_about_us_p4_oh1yqx.jpg',
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739555533/Images_in_about_us_p3-min_bq9ywj.jpg'
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    const images = gallery.querySelectorAll('img');
    const totalWidth = Array.from(images).reduce((acc, img) => acc + img.offsetWidth + 32, 0);

    // Create GSAP timeline for infinite scrolling
    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tl.current.to(gallery, {
      x: `-=${totalWidth / 2}`,
      duration: totalWidth / 100,
      ease: 'none',
    });

    return () => tl.current.kill();
  }, []);

  const scrollGallery = (direction) => {
    if (tl.current) {
      tl.current.pause();
      setIsAnimating(false);
    }

    gsap.to(galleryRef.current, {
      x: direction === 'left' ? '+=400' : '-=400',
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div className="relative w-full h-96 overflow-hidden z-20">
      {/* Left Arrow */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0a192f]/60 p-3 rounded-full hover:bg-[#ff98d6]/70 transition-all z-30"
        onClick={() => scrollGallery('left')}
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0a192f]/60 p-3 rounded-full hover:bg-[#ff98d6]/70 transition-all z-30"
        onClick={() => scrollGallery('right')}
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Image Wrapper */}
      <div 
        ref={galleryRef}
        className="absolute top-0 left-0 h-full flex items-center gap-8 z-10"
        style={{ width: '200%' }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="h-80 w-auto rounded-lg shadow-lg object-cover"
          />
        ))}
        {images.map((src, i) => (
          <img
            key={i + 4}
            src={src}
            alt={`Gallery ${i + 5}`}
            className="h-80 w-auto rounded-lg shadow-lg object-cover"
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r z-20" />
    </div>
  );
};

export default Gallery;
