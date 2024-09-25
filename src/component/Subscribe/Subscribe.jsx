import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import NavbarMain from "../NavbarMain/Navbarmain.jsx";
import { Helmet } from "react-helmet";

export default function Subscribe() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  // Animation variants for each step
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
    <Helmet>
      <title>كيفيه الاشتراك</title>
    </Helmet>
      <NavbarMain isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div
        className={`flex flex-col items-center justify-center min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-indigo-600 to-purple-800 text-white"
        } p-6`}
      >
        <h1 className="text-5xl font-extrabold mb-12 text-center tracking-wide">
          خطوات الانضمام إلى المنصة
        </h1>

        <div className="space-y-8 max-w-2xl w-full">
          {/* Step 1 */}
          <motion.div
            className={`${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            } rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105`}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border-b-4 border-indigo-500 pb-4 mb-4">
              <h2 className="text-2xl font-bold mb-2">1. الضغط على زر "انضم الآن"</h2>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                ابدأ رحلتك التعليمية بالضغط على زر "انضم الآن" الموجود في الصفحة الرئيسية.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className={`${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            } rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105`}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border-b-4 border-purple-500 pb-4 mb-4">
              <h2 className="text-2xl font-bold mb-2">2. إدخال الإيميل والاسم الثلاثي</h2>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                بعد الضغط على "انضم الآن"، قم بإدخال الإيميل الخاص بك والاسم الثلاثي.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className={`${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            } rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105`}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border-b-4 border-green-500 pb-4 mb-4">
              <h2 className="text-2xl font-bold mb-2">3. اختيار الصف</h2>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                اختر الصف الذي تنتمي إليه بعد إدخال بياناتك للحصول على المحتوى المناسب.
              </p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className={`${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            } rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105`}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border-b-4 border-red-500 pb-4 mb-4">
              <h2 className="text-2xl font-bold mb-2">4. التواصل مع الأستاذ طارق النحاس للحصول على الكود</h2>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                تواصل مع الأستاذ طارق النحاس للحصول على الكود الخاص بك.
              </p>
            </div>
          </motion.div>

          {/* Step 5 */}
          <motion.div
            className={`${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
            } rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105`}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="pb-4">
              <h2 className="text-2xl font-bold mb-2">5. إدخال الكود والانتقال للمحتوى</h2>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                بعد الحصول على الكود، قم بإدخاله ثم اضغط على زر "مشاهدة الآن" للانتقال إلى صفحة المحتوى.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
