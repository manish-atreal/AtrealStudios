import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import { services } from "./data/services-data.js"; // Assuming you have a services.js file with the data

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const MotionNavLink = motion(NavLink);

export default function Services() {
  const controls = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
    controls.start("visible");
  }, [controls]);

  return (
    <div className="w-full bg-white">
      {/* Services Section */}
      <section className="w-full  pb-4 md:pb-24 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 1, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-blue-950"
        >
          Who We Serve
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="w-full h-48 bg-gray-50 flex items-center justify-center p-6">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="h-full object-contain"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-3 text-lg">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 text-base">
                    {service.description}
                  </p>
                </div>

                <MotionNavLink
                  to={service.link}
                  className="mt-auto inline-block bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors w-1/2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More
                </MotionNavLink>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </section>


    </div>
  );
}