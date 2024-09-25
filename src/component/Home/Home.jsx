import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import photo from "../../assets/ea5875ef1fbb4382ba6f91522e20b2f7-removebg-preview.png";
import { Helmet } from "react-helmet";

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
    document.body.className = isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800";
  }, [isDarkMode]);

  return (
    <>
    <Helmet>
      <title>الصفحه الرئيسيه</title>
    </Helmet>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className={`flex flex-col md:flex-row justify-around items-center px-4 py-8 min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-50 to-blue-100'}`}>
        {/* Text Section */}
        <div className="text-center md:text-right mb-8 md:mb-0 animate-slide-up">
          <p className="font-extrabold text-2xl md:text-6xl mb-4 tracking-wide leading-tight animate-fade-in">
            {text}
            <span className="font-extrabold text-4xl md:text-7xl block mt-4 animate-bounce-slow">
              طارق النحاس
            </span>
          </p>
          <Link to="signin">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl animate-bounce-slow">
              انضم الآن
            </button>
          </Link>
        </div>

        {/* Image Section (Fixed Image) */}
        <div>
          <img
            src={photo}
            alt="منصة الكيمياء"
            className="w-80 md:w-96 drop-shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
