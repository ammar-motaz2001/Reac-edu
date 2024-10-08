import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import axios from "axios";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Signinwithcode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(""); // Code input state
  const navigate = useNavigate();

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

        // Redirect to /free if the login was successful
        navigate("/free");
      } else {
        setErrorMessage("الكود غير صحيح. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.message : "حدث خطأ ما"
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

  return (
    <>
      <Helmet>
        <title>تسجيل الدخول</title>
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
          <h1 className="text-3xl font-bold text-center mb-6">تسجيل الدخول بالكود</h1>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            placeholder="ادخل الكود الخاص بك"
            className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-2 ${
              isDarkMode ? "bg-gray-600 text-white" : "bg-white text-gray-800"
            }`}
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

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
        </div>
      </div>
    </>
  );
}
