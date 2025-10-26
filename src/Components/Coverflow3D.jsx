"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const Coverflow3D = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef(null);

  const graphicWorks = [
    {
      title: "Brand Identity Design",
      description: "Modern logo and brand guidelines for tech startup",
      image: "/11.jpeg",
    },
        {
      title: "Brand Identity Design",
      description: "Modern logo and brand guidelines for tech startup",
      image: "/2.jpeg",
    },
        {
      title: "Brand Identity Design",
      description: "Modern logo and brand guidelines for tech startup",
      image: "/3.jpeg",
    },
    {
      title: "UI/UX Design",
      description: "Mobile app interface with intuitive user experience",
      image: "/4.jpg",
    },
    {
      title: "Poster Design",
      description: "Creative event poster with bold typography",
      image: "/5.jpeg",
    },
    {
      title: "Packaging Design",
      description: "Premium product packaging with elegant aesthetics",
      image: "/6.jpeg",
    },
    {
      title: "Social Media Graphics",
      description: "Engaging visual content for digital platforms",
      image: "/13.jpeg",
    },
    {
      title: "Illustration",
      description: "Custom digital illustrations and character design",
      image: "/8.jpeg",
    },
    {
      title: "Web Design",
      description: "Responsive website mockups with modern layouts",
      image: "/9.jpeg",
    },
      {
      title: "Web Design",
      description: "Responsive website mockups with modern layouts",
      image: "/10.jpeg",
    },
      {
      title: "Web Design",
      description: "Responsive website mockups with modern layouts",
      image: "/1.jpg",
    },
      {
      title: "Web Design",
      description: "Responsive website mockups with modern layouts",
      image: "/12.jpeg",
    },
      {
      title: "Web Design",
      description: "Responsive website mockups with modern layouts",
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
      className="relative  overflow-hidden w-full min-h-screen flex items-center justify-center bg-black"
      style={{
        perspective: "1000px",
        paddingTop: "6rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* Title */}
        <div className="text-center mb-1  z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fadeIn">
            {graphicWorks[currentIndex].title}
          </h2>
          <p className="text-lg text-white/70 animate-fadeIn">
            {graphicWorks[currentIndex].description}
          </p>
        </div>

        {/* Coverflow */}
        <div
          className="relative w-full h-[420px] flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {graphicWorks.map((work, index) => (
            <div
              key={index}
              onClick={() => !isAnimating && updateCoverflow(index)}
              className="absolute w-64 h-64 md:w-72  md:h-72   cursor-pointer transition-all duration-700 ease-out flex items-center justify-center"
              style={getItemStyle(index)}
            >
              <div
                className={`w-full h-full   rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center ${
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
            className="absolute  left-6 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              stopAutoplay();
              navigate(1);
            }}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-3 mt-1 z-10 ">
          {graphicWorks.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoplay();
                updateCoverflow(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300  ${
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
