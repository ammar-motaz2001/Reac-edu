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
import OfflineNotification from "./component/Offline/Offline.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/signin", element: <Signin /> },
  { path: "/subscribe", element: <Subscribe /> },
  { path: "/buy-content", element: < BuyContent/> },
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
  { path: "*", element: <Notfoundpage /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <OfflineNotification /> {/* Add the OfflineNotification component */}
    </>
  );
}
