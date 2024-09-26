import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const FreeContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800";
  }, [isDarkMode]);

  return (
    <>
      <Helmet>
        <title>المحتوي المجاني</title>
      </Helmet>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} flex items-center justify-center`}>
        <div className={`container mx-auto p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg`}>
          <h1 className="text-4xl font-bold mb-6 text-center">المحتوي المجاني</h1>
          
          {/* Card for Important Notes */}
          <div className={`bg-gray-700 rounded-lg shadow-lg p-6 mb-4 transition-transform transform hover:scale-105`}>
            <h2 className="text-xl font-bold text-yellow-300 mb-4">أهم الملاحظات على كل باب</h2>
            <p className="text-gray-300 mb-4">تعرف على أبرز النقاط التي يجب أن تعرفها لكل باب.</p>
            <Link to="/important-notes" className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              مشاهدة الآن
            </Link>
          </div>

          {/* Card for Introductory Video */}
          <div className={`bg-gray-700 rounded-lg shadow-lg p-6 mb-4 transition-transform transform hover:scale-105`}>
            <h2 className="text-xl font-bold text-yellow-300 mb-4">فيديو تعريفي للمنصة</h2>
            <p className="text-gray-300 mb-4">شاهد الفيديو للتعرف أكثر على مميزات المنصة.</p>
            <Link to="/intro-video" className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              مشاهدة الآن
            </Link>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-6">
            <Link to="/" className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeContent;
