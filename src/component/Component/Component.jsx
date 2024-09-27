import React from 'react';
import photo from '../../assets/WhatsApp_Image_2024-09-27_at_15.26.18_f6b0cfa5-removebg-preview.png';

export default function Content() {
  const grades = [
    { title: 'الصف الأول الثانوي', description: ' محتوى متنوع لتعلم الصف الأول الثانوي' },
    { title: 'الصف الثاني الثانوي', description: 'استكشف المواد التعليمية للصف الثاني الثانوي' },
    { title: 'الصف الثالث الثانوي', description: 'كل ما تحتاجه للنجاح في الصف الثالث الثانوي' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-12">استكشاف المحتوى التعليمي</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {grades.map((grade, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{grade.title}</h2>
            <p className="text-gray-600 mb-4">{grade.description}</p>
            
            {/* Adding Image */}
            <img
              src={photo}
              alt="Content"
              className="w-full h-[15rem] object-cover mb-6 rounded-lg"
            />
            
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              استكشف الآن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
