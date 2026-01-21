import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { teamMembers } from "./data/teamData.js";

const TeamPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-950"
        >
          Meet The Dream Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-base text-gray-600 max-w-2xl mx-auto mb-12"
        >
          The brilliant minds turning pixels into magic and code into
          experiences. We're not just building products - we're crafting the
          future of immersive tech!
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "0px 0px -30px 0px" }}
              className="w-full max-w-[240px] sm:max-w-[260px] bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image container with consistent aspect ratio */}
              <div className="relative pt-[100%] bg-gray-50"> {/* 1:1 aspect ratio */}
                <div className="absolute inset-0 p-4 flex items-center justify-center">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className={`max-h-full max-w-full ${
                      member.image ? "object-contain" : "object-contain p-6"
                    }`}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onError={(e) => {
                      e.target.src = placeholderImage;
                      e.target.className = "max-h-full max-w-full object-contain p-6";
                    }}
                  />
                </div>
              </div>

              <div className="p-4 text-center flex-grow">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg font-bold text-gray-900 mb-1"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-blue-600 font-medium mb-2"
                >
                  {member.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-gray-600"
                >
                  {member.description}
                </motion.p>
              </div>
            </motion.div>
          ))}

          {/* Join Our Team Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: teamMembers.length * 0.1,
            }}
            viewport={{ once: true }}
            className="w-full max-w-[240px] sm:max-w-[260px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden shadow-md border border-blue-100 flex flex-col justify-center items-center p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-4"
            >
              <svg
                className="w-16 h-16 text-blue-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-bold text-gray-900 mb-2"
            >
              Your Face Here?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-gray-600 mb-4"
            >
              Join our adventure!
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-md shadow transition-colors duration-300"
            >
              <NavLink to="/career">
                Join Our Team Today!
              </NavLink>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
