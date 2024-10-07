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

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [hasCode, setHasCode] = useState(false); // State to track if user has a code
  const [modalVisible, setModalVisible] = useState(false); // Modal state
  const [responseNo, setResponseNo] = useState(""); // State to store 'no' value from response
  const navigate = useNavigate();

  // Function to handle API submission for email
  async function addCode(values) {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://tarek-elnahas.vercel.app/sign-in",
        values
      );

      if (response.data.message === "تم الإنشاء بنجاح") {
        console.log(response.data.user.no);
        localStorage.setItem("code", response.data.user.code); // Store the code
        localStorage.setItem("grade", response.data.user.grade);
        setErrorMessage("");

        // Handle the 'no' value in response
        if (response.data.user.no) {
          setResponseNo(response.data.user.no);
          setModalVisible(true); // Show modal if 'no' is present
        }
      } else {
        setErrorMessage("لم يتم الإنشاء.يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  }

  // Function to handle code login
  async function handleCodeLogin() {
    setLoading(true);
    // Check if the code input is empty
    if (!code) {
      setErrorMessage("يرجي ادخال الكود");
      setLoading(false);
      return; // Exit the function early
    }

    try {
      const response = await axios.post(
        "https://tarek-elnahas.vercel.app/login-with-code", // Adjusted endpoint for code login
        { code }
      );

      if (response.data.message === "تم تسجيل الدخول بنجاح") {
        localStorage.setItem("code", response.data.user.code);
        localStorage.setItem("grade", response.data.user.grade); // Store grade from response

        // Redirect based on grade
        const grade = response.data.user.grade;
        switch (grade) {
          case "الصف الاول الثانوي":
            navigate("/first-grade-content"); // Replace with your actual route
            break;
          case "الصف الثاني الثانوي":
            navigate("/second-grade-content"); // Replace with your actual route
            break;
          case "الصف الثالث الثانوي":
            navigate("/third-grade-content"); // Replace with your actual route
            break;
          default:
            navigate("/loading");
        }
      } else {
        setErrorMessage("الكود غير صحيح. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    document.body.className = isDarkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-800";
  }, [isDarkMode]);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      grade: "الصف الاول الثانوي",
    },
    onSubmit: (values) => {
      addCode(values);
    },
  });

  return (
    <>
      <Helmet>
        <title>{hasCode ? "تسجيل الدخول" : "إنشاء الحساب الخاص بك"}</title> {/* Change title based on hasCode */}
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
          <h1 className="text-3xl font-bold text-center mb-6">
            {hasCode ? "تسجيل الدخول" : "إنشاء الحساب الخاص بك"} {/* Change header based on hasCode */}
          </h1>
          <form onSubmit={formik.handleSubmit}>
            {!hasCode && (
              <>
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

                {/* Note about email */}
                <p className={isDarkMode ? "text-gray-300 mb-4" : "text-gray-700 mb-4"}>
                  شرط ان يكون البريد الالكتروني صحيح حتي تتيح لك مشاهده الفيديوهات واداء الامتحانات بسهوله.
                </p> 
              </>
            )}

            {hasCode && (
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                placeholder="ادخل الكود الخاص بك"
                className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-2 ${
                  isDarkMode ? "bg-gray-600 text-white" : "bg-white text-gray-800"
                }`}
              />
            )}

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            {!hasCode ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200 flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  "تسجيل الدخول"
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCodeLogin}
                className="w-full bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700 transition duration-200 flex justify-center items-center mt-4"
                disabled={loading || !code}
              >
                {loading ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  "تسجيل الدخول بالكود"
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => setHasCode(!hasCode)}
              className="w-full bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700 transition duration-200 mt-4"
            >
              {hasCode ? "الرجوع إلى إنشاء حساب" : "هل تمتلك كود بالفعل؟"}
            </button>
          </form>
        </div>
      </div>

      {/* Modal for showing response 'no' */}
      {modalVisible && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div className={`p-8 rounded-lg shadow-lg max-w-md w-full text-center ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
        معلومات الحساب
      </h2>
      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
        تم الحصول على الرقم: {responseNo}
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setModalVisible(false)}
          className={`px-4 py-2 rounded-md ${
            isDarkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-400 text-black hover:bg-blue-500"
          }`}
        >
          أغلق
        </button>
        <button
          onClick={() => navigate("/loading")}
          className={`px-4 py-2 rounded-md ${
            isDarkMode
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-green-400 text-black hover:bg-green-500"
          }`}
        >
          استمرار
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}
