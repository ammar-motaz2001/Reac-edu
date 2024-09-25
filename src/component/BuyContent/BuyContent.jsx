import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link for navigation

const BuyContent = () => {
  return (
  <>
    <Helmet>
      <title>شراء المحتوي</title>
    </Helmet>
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">شراء المحتوى</h1>
        <p className="mb-4 text-lg">
          يمكنك شراء المحتوى عن طريق تحويل المبلغ المطلوب إلى الرقم التالي:
        </p>
        <div className="bg-gray-700 p-4 rounded-lg mb-4 text-center shadow-md">
          <p className="font-semibold text-xl">رقم الحساب: 01019371668</p>
        </div>
        <p className="mb-4 text-lg">
            يرجي التواصل مع الاستاذ طارق النحاس للتاكد من المبلغ المدفوع لشراء المحتوي
        </p>
        
        {/* Button to go back to home page */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 shadow-md"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  </>
    
  );
};

export default BuyContent;
