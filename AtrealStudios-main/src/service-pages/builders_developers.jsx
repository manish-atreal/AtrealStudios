import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/builders-developers.js';

export default function builders_developers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="px-6 pb-12 max-w-7xl mx-auto"
    >
      <motion.h1 
        variants={cardItem}
        className="text-3xl sm:text-4xl md:text-5xl text-blue-950 text-center mb-8 md:mb-12 font-bold"
      >
        For Builders And Developers
      </motion.h1>

      <motion.div 
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardItem}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="w-full h-48 flex items-center justify-center p-4 bg-gray-50">
              <img 
                src={service.image} 
                alt={service.title}
                className="h-full object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex-grow text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-950 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 font-medium mb-3 text-base">
                {service.subtitle}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}