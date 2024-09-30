import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import photo from "../../assets/ea5875ef1fbb4382ba6f91522e20b2f7-removebg-preview.png";
import { Helmet } from "react-helmet";
import video from "../../assets/video6037453966281807872.mp4"; // تأكد من مسار الفيديو الصحيح

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "مرحباً بكم في منصة الكيمياء مع الاستاذ";
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    let index = 0;
    const typingEffect = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
    return () => clearInterval(typingEffect);
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800";
  }, [isDarkMode]);

  return (
    <>
      <Helmet>
        <title>الصفحه الرئيسيه</title>
      </Helmet>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div
        className={`flex flex-col md:flex-row justify-around items-center px-4 py-8 min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-800 to-gray-900"
            : "bg-gradient-to-b from-blue-50 to-blue-100"
        }`}
      >
        {/* Text Section */}
        <div className="text-center md:text-right mb-8 md:mb-0 animate-slide-up">
          <p className="font-extrabold text-2xl md:text-6xl mb-4 tracking-wide leading-tight animate-fade-in">
            {text}
            <span className="font-extrabold text-4xl md:text-7xl block mt-4 animate-bounce-slow">
              طارق النحاس
            </span>
          </p>
          <div className="space-y-4">
            <Link to="signin">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl animate-bounce-slow">
                انضم الآن
              </button>
            </Link>

            {/* Explore Now Button */}
            <Link to="/free-sign">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold mr-4 py-3 px-8 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl animate-bounce-slow">
                استكشف الآن
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section (Fixed Image) */}
        <div>
          <img
            src={photo}
            alt="منصة الكيمياء"
            className="w-80 md:w-96 drop-shadow-2xl rounded-full"
          />
        </div>
      </div>

      {/* Video Section */}
      <div
        className={`flex flex-col justify-center items-center my-8 p-4 rounded-lg shadow-lg ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-800 to-gray-900"
            : "bg-gradient-to-b from-blue-50 to-blue-100"
        }`}
      >
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
          فيديو لتوضيح كيفية الاشتراك
        </h2>

        {/* Video Element */}
        <video
          className="w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
          controls
          preload="none"
        >
          <source src={video} type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>
      </div>
    </>
  );
};

export default Home;
