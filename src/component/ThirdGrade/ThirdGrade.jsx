import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

export default function ThirdGrade() {
  return (
   <>
   <Helmet>
      <title>الصف الثالث الثانوي</title>
    </Helmet>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-purple-600 p-4">
      {/* Logout Button */}
      <Link to={'/'} className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white font-semibold py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300">
        <FaSignOutAlt className="ml-2 text-xl" />
        تسجيل الخروج
      </Link>

      {/* Main Content Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full text-center transform transition-all duration-500 hover:scale-105">
        {/* Header Section */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          مرحباً بكم في <span className="text-purple-500">الصف الثالث الثانوي</span>
        </h1>

        {/* Main Content */}
        <p className="text-base sm:text-lg mb-8 text-gray-700 leading-relaxed">
          هذا هو المحتوى الخاص بالصف الثالث الثانوي. يمكنك من خلال هذه الصفحة الانتقال إلى المحتوى التعليمي الخاص بالصف واستكشاف الموارد التي تساعدك على النجاح في دراستك.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/https://drive.google.com/drive/u/4/home?hl=ar"
            className="flex items-center ml-3 bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            مشاهدة المحتوى
          </Link>
          <Link
            to="/exam"
            className="flex items-center bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            امتحن الآن
          </Link>
        </div>
      </div>
    </div>
   </>
  );
}
