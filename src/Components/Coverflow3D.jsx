"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Coverflow3D = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef(null);

  const graphicWorks = [
    {
      title: "Chicken Baryani Design",
      description: "Traditional Chicken Biryani Brand Identity Design",
      image: "/11.jpeg",
    },
    {
      title: "Chicken Thandoori Design",
      description: "Chicken Tandoori Brand Identity Design",
      image: "/2.jpeg",
    },
    {
      title: "Islamic Poster Design",
      description: "وَاللَّهُ خَيْرُ الرَّازِقِين",
      image: "/3.jpeg",
    },
    {
      title: "Election Poster Design",
      description: "Bold, impactful design highlighting leadership, vision, unity, strength.",
      image: "/4.jpg",
    },

    {
      title: "Digital Future Design",
      description: "Innovative, modern concept embracing technology, connectivity, growth, transformation.",
      image: "/6.jpeg",
    },
    {
      title: "Lustra Skin Care  ",
      description: "Elegant, premium branding focused on beauty, glow, purity.",
      image: "/13.jpeg",
    },
   
    {
      title: "Amrican Food Billboard Design",
      description: "Bold, appetizing visuals showcasing burgers, fries, flavor, excitement.",
      image: "/9.jpeg",
    },

    {
      title: "Samosa Poster Design",
      description: "Crispy, spicy visuals highlighting flavor, freshness, street-food charm.",
      image: "/7.jpeg",
    },
  ];

  const updateCoverflow = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const navigate = (direction) => {
    if (isAnimating) return;
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = graphicWorks.length - 1;
    if (newIndex >= graphicWorks.length) newIndex = 0;
    updateCoverflow(newIndex);
  };

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % graphicWorks.length);
    }, 4000);
    setIsPlaying(true);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const getItemStyle = (index) => {
    let offset = index - currentIndex;
    if (offset > graphicWorks.length / 2) offset -= graphicWorks.length;
    if (offset < -graphicWorks.length / 2) offset += graphicWorks.length;

    const absOffset = Math.abs(offset);
    const sign = Math.sign(offset);

    const translateX = offset * 180;
    const translateZ = -absOffset * 150;

    const rotateY = -sign * Math.min(absOffset * 35, 35);
    const opacity = absOffset > 3 ? 0 : 1 - absOffset * 0.25;
    const scale = 1 - absOffset * 0.1;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 100 - absOffset,
    };
  };

  return (
    <div
      className="relative overflow-hidden w-full bg-black py-8 md:py-12"
      style={{
        perspective: "1000px",
        paddingTop: "6rem", // Increased from 6rem to clear header
      }}
    >
      <div className="w-full flex flex-col items-center justify-center px-4">
        {/* Title */}
        <div className="text-center mb-4 md:mb-6 z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 animate-fadeIn">
            {graphicWorks[currentIndex].title}
          </h2>
          <p className="text-sm md:text-lg text-white/70 animate-fadeIn">
            {graphicWorks[currentIndex].description}
          </p>
        </div>

        {/* Coverflow */}
        <div
          className="relative  w-full h-[330px] md:h-[390px] flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {graphicWorks.map((work, index) => (
            <div
              key={index}
              onClick={() => !isAnimating && updateCoverflow(index)}
              className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 cursor-pointer transition-all duration-700 ease-out flex items-center justify-center"
              style={getItemStyle(index)}
            >
              <div
                className={`w-full h-full rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center ${
                  index === currentIndex ? "shadow-purple-500/30 scale-105" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority={index === currentIndex}
                />
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              stopAutoplay();
              navigate(-1);
            }}
            className="absolute left-2 md:left-6 lg:left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => {
              stopAutoplay();
              navigate(1);
            }}
            className="absolute right-2 md:right-6 lg:right-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 md:gap-3 mt-3 md:mt-4 z-10 flex-wrap justify-center pb-8">
          {graphicWorks.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoplay();
                updateCoverflow(index);
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white/80 scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coverflow3D;
