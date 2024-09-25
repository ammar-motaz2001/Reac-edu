import React from 'react';
import { Navigate } from 'react-router-dom';
import FirstGrade from '../FirstGrade/FirstGrade.jsx';
import SecondGrade from '../SecondGrade/SecondGrade.jsx';

export default function ProtectedRoutes({ children, requiredGrade }) {
    const authCode = localStorage.getItem('code');
    const userGrade = localStorage.getItem('grade');

      if(userGrade==="الصف الاول الثانوي"){
        return <FirstGrade/>
      }
      else if(userGrade==="الصف الثاني الثانوي"){
        return <SecondGrade/>
      }
      else if(userGrade==="الصف الثالث الثانوي"){
        return <FirstGrade/>
      }
    // التحقق من الكود
    if (!authCode) {
        return <Navigate to="/signin" />; // إعادة التوجيه إلى صفحة تسجيل الدخول
    }

    // التحقق من الصف الدراسي
    if (userGrade !== requiredGrade) {
        return <Navigate to="/not-found" />; // إعادة توجيه إلى صفحة غير موجودة أو أي صفحة أخرى
    }

    return children;
}