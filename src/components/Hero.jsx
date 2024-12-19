import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeOne from "../assets/HomeOne.jpg";

const Hero = () => {
  const slides = [
    {
      image:
        // "https://images.pexels.com/photos/1069000/pexels-photo-1069000.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
        "https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Legacy of Legal Excellence",
      paragraph: "Delivering Trusted Solutions with Integrity and Expertise",
      buttonText: "Find Out More",
      buttonLink: "/contact",
    },
    {
      // image: HomeOne,
      image:
        "https://images.pexels.com/photos/3905838/pexels-photo-3905838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Immigration is our DNA",
      paragraph: "Navigating Your Legal Needs with Confidence and Integrity",
      buttonText: "Discover More",
      buttonLink: "/contact",
    },

    {
      image:
        "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Your Attorney for Immigration",
      paragraph:
        "Providing Trusted Legal Solutions with Dedication and Integrity",
      buttonText: "Speak With Us",
      buttonLink: "/contact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <section className="relative h-full w-full overflow-hidden select-none">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl uppercase ">
          {slides[currentIndex].heading}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light">
          {slides[currentIndex].paragraph}
        </p>
        <a
          href={slides[currentIndex].buttonLink}
          className="mt-8 inline-block px-6 py-3 border-[1px] border-navGray text-white rounded text-lg font-light transition hover:bg-opacity-90"
        >
          {slides[currentIndex].buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
