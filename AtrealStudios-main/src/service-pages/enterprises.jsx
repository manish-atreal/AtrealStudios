import React from "react";
import  { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function enterprises() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-[110px] px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{
            opacity: 1,
            rotate: [0, 1.5, -1.5, 1.5, -1.5, 0],
            scaleX: [1, 1.01, 0.99, 1.01, 0.99, 1],
            boxShadow: [
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="max-w-md mx-auto bg-white rounded-xl overflow-hidden border border-gray-200"
        >
          <div className="p-8 text-center">
            <motion.h2
              animate={{
                textShadow: [
                  "0 0 0px rgba(0, 0, 0, 0)",
                  "0 0 2px rgba(0, 0, 139, 0.2)",
                  "0 0 0px rgba(0, 0, 0, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              For customized AR/VR solutions contact our sales team
            </motion.h2>
            <NavLink
              to="/contact"
              className="inline-block bg-blue-950 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Contact Sales
            </NavLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
