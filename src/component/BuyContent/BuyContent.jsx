import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const BuyContent = () => {
  return (
    <>
      <Helmet>
        <title>شراء المحتوي</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="container mx-auto p-6 md:p-8 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-yellow-300 animate__animated animate__fadeInDown">شراء المحتوى</h1>
          <p className="mb-4 text-base md:text-lg text-gray-300 animate__animated animate__fadeIn">يمكنك شراء المحتوى عن طريق التواصل واتس اب علي الرقم التالي:</p>
          
          <div className="bg-yellow-600 p-4 rounded-lg mb-4 text-center shadow-md animate__animated animate__bounceIn">
            <p className="font-semibold text-xl">01005861691</p>
          </div>

          <p className="mb-4 text-base md:text-lg text-red-500 font-bold text-center animate__animated animate__fadeIn">
            يرجي التواصل مع الرقم أولاً لمعرفه مبلغ المحتوي والتأكد من الحجز والدفع.
          </p>

          {/* Button to go back to home page */}
          <Link
            to="/"
            className="inline-block mt-4 md:mt-6 px-4 md:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 shadow-md transform hover:scale-105 animate__animated animate__fadeIn"
          >
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </>
  );
};

export default BuyContent;
