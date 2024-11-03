import React from "react";
import { FaTools } from "react-icons/fa"; // Import an icon from react-icons

export default function Repair() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <FaTools className="text-6xl mb-4" /> {/* Repair icon */}
      <p className="text-center text-2xl font-bold">
        جاري العمل على تشغيل المنصة
      </p>
    </div>
  );
}
