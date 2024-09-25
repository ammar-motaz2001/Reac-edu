import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import photo from "../../assets/6465037-removebg-preview.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800";
  }, [isDarkMode]);

  return (
    <>
    <Helmet>
      <title>من نحن</title>
    </Helmet>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <motion.div 
        className={`flex flex-col md:flex-row justify-around items-center p-8 min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-200 to-blue-500'}`}
        initial={{ opacity: 0, y: 50 }}  // البداية
        animate={{ opacity: 1, y: 0 }}   // النهاية
        transition={{ duration: 0.5 }}     // مدة الانيميشن
      >
        <div className={`max-w-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg rounded-lg p-6 border border-gray-300 transform transition-transform duration-500 hover:scale-105`}>
          <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'} mb-4 text-center`}>من نحن</h2>
          <p className={`text-md md:text-lg leading-relaxed mb-6 text-justify ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            مرحبًا بكم في منصتنا التعليمية المتخصصة في مجال الكيمياء! نحن هنا لمساعدتكم في استكشاف عالم الكيمياء بطريقة جديدة ومثيرة. أسس هذه المنصة الأستاذ طارق النحاس، الذي يمتلك خبرة واسعة في تدريس الكيمياء. نحن نؤمن بأن التعليم هو المفتاح لفتح آفاق جديدة، ونسعى جاهدين لتمكين طلابنا من فهم الكيمياء وتطبيقها في حياتهم اليومية.
          </p>

          <div className="flex justify-center">
            <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110">
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-0 transform transition-transform duration-500 hover:scale-105">
          <img
            src={photo}
            alt="about"
            className="w-64 md:w-80 drop-shadow-2xl transition-transform duration-700 transform hover:scale-105"
          />
        </div>
      </motion.div>
    </>
  );
}
