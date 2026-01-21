import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResDev, ReqDev, Res3D, Req3D, ResIntern, ReqIntern } from "./data/res-req.js";


const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState("development");
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const openApplyModal = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0, x: 50 }
  };

  return (
    <motion.section 
      className="pb-8 bg-gray-50" 
      id="careers"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're looking for talented individuals and enthusiastic learners to
            join us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <motion.div 
            className="flex border-b border-gray-200 mb-8 overflow-x-auto"
            variants={itemVariants}
          >
            <button
              className={`flex-shrink-0 py-3 px-3 font-medium text-sm sm:text-lg ${
                activeTab === "development"
                  ? "text-blue-950 border-b-2 border-blue-950"
                  : "text-gray-500 hover:text-blue-950"
              }`}
              onClick={() => setActiveTab("development")}
            >
              VR Development
            </button>
            <button
              className={`flex-shrink-0 py-3 px-3 font-medium text-sm sm:text-lg ${
                activeTab === "modeling"
                  ? "text-blue-950 border-b-2 border-blue-950"
                  : "text-gray-500 hover:text-blue-950"
              }`}
              onClick={() => setActiveTab("modeling")}
            >
              3D Modeling
            </button>
            <button
              className={`flex-shrink-0 py-3 px-3 font-medium text-sm sm:text-lg ${
                activeTab === "internship"
                  ? "text-blue-950 border-b-2 border-blue-950"
                  : "text-gray-500 hover:text-blue-950"
              }`}
              onClick={() => setActiveTab("internship")}
            >
              Internship
            </button>
          </motion.div>

          {/* Job Listings */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "development" && (
                <motion.div
                  className="p-6 sm:p-8"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key="development"
                >
                  <motion.h3 
                    className="text-2xl font-bold text-blue-950 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    VR Developer
                  </motion.h3>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {ResDev.map((item, index) => (
                        <motion.li 
                          key={`res-dev-${index}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Requirements
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {ReqDev.map((item, index) => (
                        <motion.li 
                          key={`req-dev-${index}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.a
                    href="mailto:info@atreal.in?subject=Application%20for%20VR%20Developer&body=Dear%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20applying%20for%20the%20position%20of%20VR%20Developer.%20Please%20find%20my%20resume%20attached.%0D%0A%0D%0ARegards%2C%0D%0A%5BYour%20Name%5D"
                    className="px-6 py-3 bg-blue-950 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              )}

              {activeTab === "modeling" && (
                <motion.div
                  className="p-6 sm:p-8"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key="modeling"
                >
                  <motion.h3 
                    className="text-2xl font-bold text-blue-950 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    3D Modeler
                  </motion.h3>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {Res3D.map((item, index) => (
                        <motion.li 
                          key={`res-3d-${index}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Requirements
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {Req3D.map((item, index) => (
                        <motion.li 
                          key={`req-3d-${index}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.a
                    href="mailto:info@atreal.in?subject=Application%20for%203D%20Modeler&body=Dear%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20applying%20for%20the%20position%20of%203D%20Modeler.%20Please%20find%20my%20resume%20attached.%0D%0A%0D%0ARegards%2C%0D%0A%5BYour%20Name%5D"
                    className="px-6 py-3 bg-blue-950 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              )}

              {activeTab === "internship" && (
                <motion.div
                  className="p-6 sm:p-8"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key="internship"
                >
                  <motion.h3 
                    className="text-2xl font-bold text-blue-950 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Internship Opportunities
                  </motion.h3>

                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      What You'll Gain
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {ResIntern.map((item, index) => (
                        <motion.li 
                          key={`res-intern-${index}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Who We're Looking For
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {ReqIntern.map((item, index) => (
                        <motion.li 
                          key={`req-intern-${index}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="mb-8 bg-blue-50 p-4 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Perks
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {["Hands-on experience with real projects", 
                        "Mentorship from industry professionals", 
                        "Flexible work hours", 
                        "Potential for full-time offer"].map((item, index) => (
                        <motion.li 
                          key={`perk-${index}`}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    {["🚀 Engineering", "📢 Sales/Marketing", "🎨 Design"].map((role, index) => {
                      const [emoji, title] = [role.substring(0, 2), role.substring(3)];
                      return (
                        <motion.div
                          key={title}
                          className="text-blue-950 border border-blue-950 rounded-lg p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow"
                          whileHover={{ y: -5 }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <div className="text-4xl mb-3">{emoji}</div>
                          <h3 className="text-2xl font-bold">{title}</h3>
                          <p className="mt-3">
                            {title === "Engineering" 
                              ? "Build the future with cutting-edge tech! Innovate, code, and create impact." 
                              : title === "Sales/Marketing" 
                                ? "Turn connections into success! Drive growth, close deals, and make impact." 
                                : "Shape ideas into reality! Craft stunning visuals and user-friendly experiences."}
                          </p>
                          <motion.button
                            onClick={() =>
                              window.open(
                                `mailto:info@atreal.in?subject=${title}%20Internship%20Application&body=Dear%20Hiring%20Team,%0D%0A%0D%0AI%20am%20excited%20to%20apply%20for%20the%20${title}%20Internship%20position.%0D%0A%0D%0A${title === "Engineering" ? "Skills:%20[Your%20technical%20skills]%0D%0AProjects:%20[Link%20to%20your%20portfolio/GitHub]" : title === "Sales/Marketing" ? "Experience:%20[Your%20relevant%20experience]%0D%0AAchievements:%20[Any%20sales/marketing%20achievements]" : "Portfolio:%20[Link%20to%20your%20portfolio]%0D%0ASkills:%20[Your%20design%20skills]"}%0D%0AAvailability:%20[Start%20date]%20to%20[End%20date]%0D%0A%0D%0AThank%20you%20for%20your%20consideration.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]`,
                                "_blank"
                              )
                            }
                            className="px-6 py-2 rounded text-white font-medium bg-blue-950 hover:bg-blue-800 mt-5 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Apply Now
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  <motion.div 
                    className="mt-8 text-center text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    <p>
                      Can't find your perfect role? We're always looking for
                      talented individuals.
                    </p>
                    <motion.a
                      href="mailto:info@atreal.in?subject=General%20Internship%20Inquiry"
                      className="text-blue-600 hover:underline mt-2 inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      Contact us to discuss opportunities
                    </motion.a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Career;