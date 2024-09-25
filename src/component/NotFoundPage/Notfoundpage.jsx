import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export default function Notfoundpage() {
  return (
   <>
   <Helmet>
      <title>الصفحه غير موجوده</title>
    </Helmet>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 text-white">
      {/* الرسوم المتحركة للعنوان */}
      <motion.h1
        className="text-8xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        404
      </motion.h1>
      
      {/* الرسوم المتحركة للوصف */}
      <motion.h2
        className="text-2xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        عذراً، الصفحة التي تحاول الوصول إليها غير موجودة.
      </motion.h2>

      {/* زر العودة إلى الصفحة الرئيسية */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } }}
      >
        <Link
          to="/"
          className="bg-indigo-500 text-white py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition duration-300 shadow-md"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </motion.div>

      {/* رسم بسيط كزخرفة */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
      >
        
      </motion.div>
    </div>
   </>
  );
}
