import React from 'react'
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const sliderData = [
  {
    id: 1,
    title: "Modern Mobile",
    subtitle: "New Collection 2026",
    description: "Explore our latest collection and find your perfect style.",
    image: "src/assets/banner01.jpg",
    button: "Explore More",
  },
  {
    id: 2,
    title: "Modern Fashion",
    subtitle: "Premium Moblie Accessories",
    description: "Upgrade your wardrobe with our premium products.",
    image: "src/assets/banner02.jpg",
    button: "Explore More",
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "New Generation ",
    description: "Experience quality, comfort and modern design.",
    image: "src/assets/banner03.jpg",
    button: "Explore More",
  },
];



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative w-full overflow-hidden">

      {/* Slider */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[650px]">

        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out
              ${
                currentIndex === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }
            `}
          >
            
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 " />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-white">

                <p className="text-sm sm:text-lg uppercase tracking-[4px] mb-4">
                  {slide.subtitle}
                </p>
                <h1
                  className={`text-3xl sm:text-5xl lg:text-7xl font-bold max-w-3xl
                    transition-all duration-1000 delay-200
                    ${
                      currentIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }
                  `}
                >
                  {slide.title}
                </h1>

                <p className="max-w-lg text-sm sm:text-base mt-5 text-gray-200">
                  {slide.description}
                </p>

                <button className="mt-8 px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
                  {slide.button}
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20
        bg-white/20 hover:bg-white text-white hover:text-black
        p-2 sm:p-4 rounded-full transition duration-300"
      >
        <ChevronLeft size={25} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20
        bg-white/20 hover:bg-white text-white hover:text-black
        p-2 sm:p-4 rounded-full transition duration-300"
      >
        <ChevronRight size={25} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500
              ${
                currentIndex === index
                  ? "w-10 bg-white"
                  : "w-3 bg-white/50"
              }
            `}
          />
        ))}
      </div>

    </section>
  )
}

export default Home