import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function EnterCode() {
  const [storedCode, setStoredCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Retrieve the code from localStorage
    const code = localStorage.getItem('code');
    setStoredCode(code);
  }, []);

  const formik = useFormik({
    initialValues: {
      code: ''
    },
    onSubmit: (values) => {
      // Compare entered code with stored code
      if (values.code === storedCode) {
        setErrorMessage(''); // Clear the error message if code is correct

        // Retrieve the grade from localStorage
        const grade = localStorage.getItem('grade');

        // Navigate to the respective grade page
        if (grade === "الصف الاول الثانوي") {
          navigate("/first-grade-content");
        } else if (grade === "الصف الثاني الثانوي") {
          navigate("/second-grade-content");
        } else if (grade === "الصف الثالث الثانوي") {
          navigate("/third-grade-content");
        } else {
          setErrorMessage('الصف غير موجود. حاول مرة أخرى.'); // Show error if grade is not found
        }
      } else {
        setErrorMessage('الكود غير صحيح. حاول مرة أخرى.'); // Show error if code is incorrect
      }
    }
  });

  return (
    <>
    <Helmet>
      <title>تاكيد الدخول</title>
    </Helmet>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">ادخل الكود الخاص بك</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Input for entering the code */}
          <input
            name="code"
            onChange={formik.handleChange}
            value={formik.values.code}
            type="text"
            placeholder="ادخل الكود"
            className="w-full p-4 bg-gray-600 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Display error message if the code is incorrect */}
          {errorMessage && (
            <div className="flex items-center text-red-500">
              <FaExclamationCircle className="mr-2" />
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            تأكيد الكود
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
}
