import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Processing() {
  return (
    <>
    <Helmet>
      <title>معالجه الطلب</title>
    </Helmet>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wider">
          جاري معالجة طلبك
        </h1>
        <p className="text-lg md:text-xl mb-8">
          تواصل مع الاستاذ طارق النحاس للتأكد من إتمام عملية التسجيل والحصول علي
          الكود
        </p>

        {/* Link to the EnterCode component */}
        <Link
          to="/enter-code"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 text-lg md:text-xl"
        >
          الانتقال إلى إدخال الكود
        </Link>
      </div>
    </div>
    </>
  );
}
