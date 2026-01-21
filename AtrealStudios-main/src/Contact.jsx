import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="container mx-auto px-6 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <motion.div
          className="relative text-blue-950 flex flex-col items-center justify-center p-8 min-h-[400px] rounded-lg overflow-hidden"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?contact,help')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-opacity-30"></div>
          <div className="relative z-10 text-center space-y-6">
            <motion.p
              className="text-2xl font-bold text-blue-950"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Have questions or want to experience our services?<br/> We're here to
              help! Reach out to us, and let's bring your vision to life.
            </motion.p>
            <motion.div
              className="text-4xl px-6 py-3 rounded-md bg-white bg-opacity-80 text-blue-950 font-semibold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Get in Touch
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          className="p-6 rounded-lg bg-white shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-blue-950 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full">
              <label
                className="block text-blue-950 mb-2 font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-3 bg-blue-50 text-blue-950 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                className="block text-blue-950 mb-2 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 bg-blue-50 text-blue-950 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <label
                className="block text-blue-950 mb-2 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-3 bg-blue-50 text-blue-950 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <div className="p-3 bg-green-100 text-green-700 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-3 bg-red-100 text-red-700 rounded">
                Something went wrong. Please try again later.
              </div>
            )}

            <button
              className="w-full md:w-1/2 rounded-md p-3 bg-blue-950 text-white font-medium hover:bg-blue-900 transition-colors disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
