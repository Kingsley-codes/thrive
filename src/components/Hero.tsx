"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useEffect, useState } from "react";

const images: string[] = [
  "csq4jkpd7pea4gjonf2f",
  "fby9puljngl9tcnnljvz",
  "m2hdjt0tbf4cgst0j2zi",
  "ik73a48o7su7eclg85nq",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setNextImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {/* Current Image (always visible) */}
        <CldImage
          width="1800"
          height="1200"
          src={images[currentImage]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />

        {/* Next Image (animated overlay) */}
        <AnimatePresence>
          <motion.div
            key={nextImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <CldImage
              width="1800"
              height="1200"
              src={images[nextImage]}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl font-extrabold mb-4">
          Welcome to Help a child Africa
        </h1>
        <p className="text-lg mb-8">
          Where we believe in a brighter future for every child in Africa.
        </p>
        <Link href="/register">
          <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
