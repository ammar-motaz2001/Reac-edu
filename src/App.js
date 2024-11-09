import React from "react";
import Home from "./component/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About us/About.jsx";
import Signin from "./component/Sign In/Signin.jsx";
import Mainpage from "./component/MainPage/Mainpage.jsx";
import Subscribe from "./component/Subscribe/Subscribe.jsx";
import Notfoundpage from "./component/NotFoundPage/Notfoundpage.jsx";
import ProtectedRoutes from "./component/protectedRoutes/ProtectedRoutes.jsx";
import Processing from "./component/Processing/Processing.jsx";
import EnterCode from "./component/EnterCode/EnterCode.jsx";
import FirstGrade from "./component/FirstGrade/FirstGrade.jsx";
import SecondGrade from "./component/SecondGrade/SecondGrade.jsx";
import ThirdGrade from "./component/ThirdGrade/ThirdGrade.jsx";
import BuyContent from "./component/BuyContent/BuyContent.jsx";
import FreeContent from "./component/FreeContent/FreeContent.jsx";
import ContentDropdown from "./component/Count/Count.jsx";
import Content from "./component/Component/Component.jsx";
import Signinwithcode from "./component/Code/Code.jsx";
import ContentOne from "./component/CountOne/Countone.jsx";
import ContentTwo from "./component/CountTwo/CountTwo.jsx";
import Repair from "./repair/repair.jsx";

const router = createBrowserRouter([
  { index:true, element: <Home /> },
  // { path: "/", element: <Repair /> },
  { path: "/signin", element: <Signin /> },
  { path: "/subscribe", element: <Subscribe /> },
  { path: "/buy-content", element: < BuyContent/> },
  { path: "/free-content", element: < FreeContent/> },

  {
    path: "/main",
    element: (
      <ProtectedRoutes>
        <Mainpage />
      </ProtectedRoutes>
    ),
  },
  { path: "/loading", element: <Processing /> },
  { path: "/Enter-Code", element: <EnterCode /> },
  {
    path: "/first-grade-content",
    element: (
      <ProtectedRoutes>
        <FirstGrade />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/second-grade-content",
    element: (
      <ProtectedRoutes>
        <SecondGrade />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/third-grade-content",
    element: (
      <ProtectedRoutes>
        <ThirdGrade />
      </ProtectedRoutes>
    ),
  },
  { path: "/count-three", element: <ContentDropdown /> },
  { path: "/count-one", element: <ContentOne /> },
  { path: "/count-two", element: <ContentTwo /> },


  { path: "/free", element: <Content/> },
  { path: "/free-sign", element: <Signinwithcode/> },

  { path: "*", element: <Notfoundpage /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <OfflineNotification /> */}
    </>
  );
}
