import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    // Initial about us images
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553511/Images_in_about_us_p1_b9avno.jpg',
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553515/Images_in_about_us_p2_jsvalz.jpg',
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739553519/Images_in_about_us_p4_oh1yqx.jpg',
    'https://res.cloudinary.com/dosnuagvu/image/upload/v1739555533/Images_in_about_us_p3-min_bq9ywj.jpg',

    // Event photos set 1
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514240/PXL_20240224_150317288_j6qqbv.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514238/tmp_3d0c8866-8734-4b6b-a4f9-91b2368049ff_erdfpr.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514236/DSC_0061_orsjic.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514236/DSC_0137_pv3gxi.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514236/PXL_20240224_074239282_f0v2t2.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514235/compressed_image_3_krzuvt.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514234/PXL_20240221_094748748_qio8tk.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514233/compressed_image_1_we9xhw.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514229/Media_xndii5.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514228/IMG-20240224-WA0079_edvs62.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514227/IMG-20240224-WA0021_qkra9y.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514245/DSC_0152_efplci.jpg",

    // Event photos set 2
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514253/DSC_0737_sigdt3.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514251/DSC_0771_nrvbl2.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514252/IMG_20240224_111005_cowpzm.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514250/DSC_0140_mo8jcj.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514249/DSC_0730_su3tm3.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514248/DSC_0732_lsctme.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514246/compressed_image_2_edha6h.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514244/DSC_0150_h4y118.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514258/DSC_0278_tyxp4i.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514259/DSC_0895_jrcewt.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514258/DSC_0783_yvfpm9.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740514257/IMG_20240224_174411_graxdm.jpg",

    // WhatsApp and additional images
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740508453/WhatsApp_Image_2025-02-25_at_23.54.39_2e15d88a_o8snpe.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740508454/WhatsApp_Image_2025-02-25_at_23.49.47_977b7b84_n1xk21.jpg",
    "https://res.cloudinary.com/dosnuagvu/image/upload/v1740509636/Vibhore_1_osfsap.jpg"
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

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => scrollGallery('right'), 2000);
    }
    return () => intervalId && clearInterval(intervalId);
  }, [isPaused, scrollGallery]);

  return (
    <div 
      className="relative w-full h-96 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        className="absolute left-4 top-1/2 -translate-x-1/2 bg-black/60 p-3 rounded-full hover:bg-pink-400/70 transition-all z-30"
        onClick={() => scrollGallery('left')}
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full hover:bg-pink-400/70 transition-all z-30"
        onClick={() => scrollGallery('right')}
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <div className="flex h-full transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
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