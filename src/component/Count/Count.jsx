import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ContentOne() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 via-purple-700 to-indigo-900 p-8 text-white">
      {/* Animation for logout button */}
      <motion.div
        className="w-full max-w-2xl flex justify-end mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transform hover:scale-110 transition duration-300 ease-out"
        >
          تسجيل الخروج
        </button>
      </motion.div>

      {/* Animated Title */}
      <motion.h1
        className="text-6xl font-extrabold text-white mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        استمتع بمشاهدة المحتوى
      </motion.h1>

      {/* Content Box with Enhanced Styling */}
      <motion.div
        className="bg-indigo-800 bg-opacity-90 text-white p-8 rounded-2xl shadow-2xl transform transition-transform duration-500 ease-in-out"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-3xl font-semibold mb-4 text-center">كل ما تحتاجه في مكان واحد</h3>
        <p className="text-lg text-center mb-6">
          اضغط على الزر أدناه للوصول إلى المحتوى الكامل.
        </p>
        
        {/* Link with Icon */}
        <motion.a
          href="https://drive.google.com/drive/folders/1ZOsuD9kQD9I9WVKIKk9X2rc379LuIJN5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          شاهد المحتوى <FaExternalLinkAlt className="ml-2 text-lg" />
        </motion.a>
      </motion.div>
    </div>
  );
}
