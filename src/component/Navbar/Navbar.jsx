import React, { useState } from "react";
import photo from "../../assets/chemistry.png"; // تأكد من أن مسار الصورة صحيح
import { Link, Outlet } from "react-router-dom"; // استخدام Link من react-router-dom
import { MoonIcon, SunIcon } from "@heroicons/react/solid"; // استيراد أيقونات من مكتبة Heroicons

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // تغيير الوضع عند النقر على زر التبديل
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode); // حفظ الحالة في localStorage
  };

  return (
    <nav className="bg-gray-800 p-4 transition-colors shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* الشعار */}
        <div>
          <a href="/">
            <img
              src={photo} // تأكد من أن مسار الصورة صحيح
              alt="Logo"
              className="h-10 w-auto" // ضبط حجم الشعار
            />
          </a>
        </div>

        {/* روابط - سطح المكتب */}
        <div className="hidden md:flex space-x-10 rtl:space-x-reverse text-white">
          <Link to="/about" className="px-4 hover:text-gray-300">
            من نحن
          </Link>
          <Link to="/subscribe" className="px-4 hover:text-gray-300">
            كيفية الاشتراك
          </Link>
          <Link to="/buy-content" className="px-4 hover:text-gray-300">
            شراء المحتوى
          </Link>
        </div>

        {/* زر القائمة للموبايل */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* زر الوضع الداكن/الفاتح بأيقونة */}
        <button onClick={toggleDarkMode} className="text-white">
          {isDarkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* قائمة الموبايل */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 rtl bg-gray-800 p-4 rounded-lg">
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              من نحن
            </Link>
          </li>
          <li>
            <Link to="/subscribe" className="text-white hover:text-gray-300">
              كيفية الاشتراك
            </Link>
          </li>
          <li>
            <Link to="/buy-content" className="text-white hover:text-gray-300">
              شراء المحتوى
            </Link>
          </li>
        </ul>
      )}
      <Outlet />
    </nav>
  );
};

export default Navbar;
