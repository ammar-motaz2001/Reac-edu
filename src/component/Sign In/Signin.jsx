import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon
import { Helmet } from "react-helmet";

export default function Signin() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // State to hold error message
  const [errorMessage, setErrorMessage] = useState("");

  // Loading state to manage spinner visibility
  const [loading, setLoading] = useState(false);

  // Get navigate function from useNavigate
  const navigate = useNavigate();

  // Function to handle API submission
  async function addCode(values) {
    setLoading(true); // Start loading spinner
    try {
      const response = await axios.post(
        "https://tarek-elnahas.vercel.app/sign-in",
        values
      );
      console.log(response.data.message);

      // Check if the response message is successful
      if (response.data.message === "تم الإنشاء بنجاح") {
        console.log(response.data.user.code);
        localStorage.setItem("code", response.data.user.code); // Store the success message or code
        localStorage.setItem("grade", response.data.user.grade); // Store the grade in localStorage
        setErrorMessage(""); // Clear any previous error message

        // Navigate to the processing page
        navigate("/loading");
        
        // No need for a setTimeout here
      } else {
        // If the response message is not the expected success message, show an error
        setErrorMessage("لم يتم الإنشاء.يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : "An error occurred"
      );
    } finally {
      setLoading(false); // Stop loading spinner
    }
  }

  useEffect(() => {
    document.body.className = isDarkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800";
  }, [isDarkMode]);

  // Formik for form management
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      grade: "الصف الاول الثانوي", // Default to first grade
    },
    onSubmit: (values) => {
      addCode(values);
    },
  });

  return (
    <>
    <Helmet>
      <title>تسجيل الدخول </title>
    </Helmet>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div
        className={`flex items-center justify-center min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-800 to-gray-900"
            : "bg-gradient-to-b from-blue-200 to-blue-500"
        }`}
      >
        <div
          className={`shadow-lg rounded-lg p-8 max-w-md w-full ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          }`}
        >
          <h1 className="text-3xl font-bold text-center mb-6">تسجيل الدخول</h1>
          <form onSubmit={formik.handleSubmit}>
            {/* Email Input */}
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              placeholder="ادخل البريد الالكتروني الخاص بك"
              className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-2 ${
                isDarkMode ? "bg-gray-600 text-white" : "bg-white text-gray-800"
              }`}
            />

            {/* Full Name Input */}
            <input
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              type="text"
              placeholder="ادخل الاسم الثلاثي"
              className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-2 ${
                isDarkMode ? "bg-gray-600 text-white" : "bg-white text-gray-800"
              }`}
            />

            {/* Grade Selection (Drop-down) */}
            <select
              name="grade"
              onChange={formik.handleChange}
              value={formik.values.grade}
              className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-2 ${
                isDarkMode ? "bg-gray-600 text-white" : "bg-white text-gray-800"
              }`}
            >
              <option value="الصف الاول الثانوي">الصف الاول الثانوي</option>
              <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
              <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
            </select>

            {/* Display error message here */}
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            {/* Button with spinner */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200 flex justify-center items-center"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <FaSpinner className="animate-spin mr-2" /> // Spinner while loading
              ) : (
                "تسجيل الدخول"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
