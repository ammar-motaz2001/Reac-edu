import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // Import Helmet
import NavbarMain from "../NavbarMain/Navbarmain.jsx";
import { Link } from "react-router-dom";

export default function Mainpage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  // Framer Motion settings for the card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>Main Page</title> {/* Set the title dynamically */}
      </Helmet>

      <NavbarMain isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div
        className={`flex flex-col items-center justify-center min-h-screen ${
          isDarkMode ? "bg-gray-900" : "bg-gradient-to-r from-blue-400 to-purple-600"
        } p-6`}
      >
        <h1
          className={`text-4xl font-bold mb-10 text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          مرحبًا بك في منصتنا التعليمية
        </h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Card 1 - الصف الأول الثانوي */}
          <motion.div
            className={`card relative transform transition-all p-6 rounded-2xl text-center shadow-lg ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              الصف الأول الثانوي
            </h2>
            <p className="mb-4">
              ابدأ التعلم الآن مع مواردنا المميزة للصف الأول الثانوي.
            </p>
            <div className="flex justify-around mt-4">
              <Link
                to={
                  "https://drive.google.com/file/d/1B944vYYHoaVg4SDo2rmERC7TB2SfwLWe/view?usp=drive_link"
                }
                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
              >
                مشاهدة الآن
              </Link>
              <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 shadow-md">
                امتحن الآن
              </button>
            </div>
          </motion.div>

          {/* Card 2 - الصف الثاني الثانوي */}
          <motion.div
            className={`card relative transform transition-all p-6 rounded-2xl text-center shadow-lg ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-purple-300" : "text-purple-700"
              }`}
            >
              الصف الثاني الثانوي
            </h2>
            <p className="mb-4">اكتشف موارد متقدمة لمستواك الدراسي وابدأ الآن.</p>
            <div className="flex justify-around mt-4">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                مشاهدة الآن
              </button>
              <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 shadow-md">
                امتحن الآن
              </button>
            </div>
          </motion.div>

          {/* Card 3 - الصف الثالث الثانوي */}
          <motion.div
            className={`card relative transform transition-all p-6 rounded-2xl text-center shadow-lg ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-pink-300" : "text-pink-700"
              }`}
            >
              الصف الثالث الثانوي
            </h2>
            <p className="mb-4">
              استعد لامتحاناتك النهائية مع مواردنا الحصرية للصف الثالث الثانوي.
            </p>
            <div className="flex justify-around mt-4">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                مشاهدة الآن
              </button>
              <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 shadow-md">
                امتحن الآن
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
