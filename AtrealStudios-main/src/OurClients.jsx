import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Using the placeholder data format
import { clients } from "./data/clients-data.js"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function OurClients() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="w-full bg-white py-10 md:py-20">
      <section className="max-w-7xl mx-auto px-3 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-blue-950"
        >
          Our Clients
        </motion.h2>

        <motion.div
          /* grid-cols-2 ensures two cards side-by-side on mobile */
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={cardVariants}
              className="bg-white rounded-lg md:rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              {/* Client Logo Area */}
              <div className="w-full h-24 sm:h-40 bg-gray-50 flex items-center justify-center p-3 md:p-8">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Client Info */}
              <div className="p-3 md:p-6 flex flex-col items-center text-center border-t border-gray-50">
                <h3 className="text-xs sm:text-base md:text-lg font-bold text-blue-950 leading-tight mb-1">
                  {client.name}
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs md:sm">
                  {client.address}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}