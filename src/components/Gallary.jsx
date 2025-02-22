import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Using placeholder images instead of external URLs
  const images = [
      'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553511/Images_in_about_us_p1_b9avno.jpg',
      'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553515/Images_in_about_us_p2_jsvalz.jpg',
      'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553519/Images_in_about_us_p4_oh1yqx.jpg',
      'https://res.cloudinary.com/dosnuagvu/image/upload/v1739555533/Images_in_about_us_p3-min_bq9ywj.jpg'
  ];

  const scrollGallery = useCallback((direction) => {
    setCurrentIndex(prevIndex => {
      if (direction === 'left') {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }
    });
  }, [images.length]);

  // Auto-scroll functionality
  useEffect(() => {
    let intervalId;
    
    if (!isPaused) {
      intervalId = setInterval(() => {
        scrollGallery('right');
      }, 2000); 
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, scrollGallery]);

  return (
    <div 
      className="relative w-full h-96 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-x-1/2 bg-black/60 p-3 rounded-full hover:bg-pink-400/70 transition-all z-30"
        onClick={() => scrollGallery('left')}
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-pink-400/70 transition-all z-30"
        onClick={() => scrollGallery('right')}
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Image Container */}
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-transform duration-500 ease-in-out ${currentIndex === index ? 'rotate-y-0' : 'rotate-y-180'}`}
            style={{
              zIndex: currentIndex === index ? 10 : 0,
              transform: currentIndex === index ? 'rotateY(0deg)' : 'rotateY(180deg)',
            }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;