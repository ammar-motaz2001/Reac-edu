import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; // تأكد من تثبيت react-icons

export default function ContentDropdown() {
  const [openIndex, setOpenIndex] = useState(null);
  const [chapterImages, setChapterImages] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Load images from localStorage on component mount
    const savedImages = JSON.parse(localStorage.getItem('chapterImages')) || {};
    setChapterImages(savedImages);
  }, []);

  const toggleDropdown = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicked again
    } else {
      setOpenIndex(index); // Open the clicked dropdown
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  // Handle image upload
  const handleImageUpload = (e, chapterIndex) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newChapterImages = { ...chapterImages, [chapterIndex]: reader.result };
        setChapterImages(newChapterImages);
        localStorage.setItem('chapterImages', JSON.stringify(newChapterImages));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image removal
  const handleImageRemove = (chapterIndex) => {
    const newChapterImages = { ...chapterImages };
    delete newChapterImages[chapterIndex]; // Remove the image for the specific chapter
    setChapterImages(newChapterImages);
    localStorage.setItem('chapterImages', JSON.stringify(newChapterImages));
  };

  // Animation variants for each dropdown
  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.5 } },
  };

  const chapters = [
    { title: 'الفصل الأول' },
    { title: 'الفصل الثاني' },
    { title: 'الفصل الثالث' },
    { title: 'الفصل الرابع' },
    { title: 'الفصل الخامس' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-3xl flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          تسجيل الخروج
        </button>
      </div>

      <h1 className="text-4xl font-bold text-white mb-10">اختر فصلاً لعرض المحتوى</h1>

      <div className="w-full max-w-3xl space-y-6">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500"
          >
            <div
              onClick={() => toggleDropdown(index)}
              className="cursor-pointer bg-indigo-600 text-white text-2xl font-semibold p-4 flex justify-between items-center"
            >
              {chapter.title}
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="overflow-hidden bg-gray-100 p-4 space-y-4"
                >
                  <div className="bg-gray-800 text-white p-3 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">كويز 1</h3>
                    <p>
                      ابدأ الآن في اختبار معلوماتك حول هذا الفصل.
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf2OYMn6eVMkSqUw8q_zFApEpM0EuRlHo6mRrNi3-mWA7ddzA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-500 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 mt-2"
                      >
                        ابدأ الكويز <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </p>
                    {/* Image upload button */}
                    <label className="flex items-center justify-center mt-3 cursor-pointer">
                      <span className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                        أضف صورة
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index)}
                        className="hidden"
                      />
                    </label>
                    {chapterImages[index] && (
                      <div className="mt-4">
                        <img
                          src={chapterImages[index]}
                          alt={`الفصل ${index + 1}`}
                          className="max-w-full h-auto rounded-lg shadow-lg"
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed size and aspect ratio
                        />
                        <button
                          onClick={() => handleImageRemove(index)}
                          className="mt-2 bg-red-500 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                        >
                          مسح الصورة
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">مشاهدة محتوى الفصل كامل</h3>
                    <p>
                      <a
                        href="https://youtube.com/playlist?list=PLw8yPWLyk_QQlUJ78XfKKmXdGvFExEHEM&si=0ayjZHWIHmtDt_6d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-500 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                      >
                        شاهد الفيديو الكامل <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </p>
                    {/* Image upload button */}
                    <label className="flex items-center justify-center mt-3 cursor-pointer">
                      <span className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                        أضف صورة
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index)}
                        className="hidden"
                      />
                    </label>
                    {chapterImages[index] && (
                      <div className="mt-4">
                        <img
                          src={chapterImages[index]}
                          alt={`الفصل ${index + 1}`}
                          className="max-w-full h-auto rounded-lg shadow-lg"
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed size and aspect ratio
                        />
                        <button
                          onClick={() => handleImageRemove(index)}
                          className="mt-2 bg-red-500 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                        >
                          مسح الصورة
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold">مراجعة شاملة على الفصل</h3>
                    <p>تأكد من فهمك مع مراجعة شاملة لمحتويات الفصل.</p>
                    {/* Image upload button */}
                    <label className="flex items-center justify-center mt-3 cursor-pointer">
                      <span className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                        أضف صورة
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index)}
                        className="hidden"
                      />
                    </label>
                    {chapterImages[index] && (
                      <div className="mt-4">
                        <img
                          src={chapterImages[index]}
                          alt={`الفصل ${index + 1}`}
                          className="max-w-full h-auto rounded-lg shadow-lg"
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Fixed size and aspect ratio
                        />
                        <button
                          onClick={() => handleImageRemove(index)}
                          className="mt-2 bg-red-500 text-white font-semibold text-sm py-1 px-2 rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                        >
                          مسح الصورة
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
