import React from "react";
import { Route, Routes } from "react-router-dom";

import LayoutWeb from "../LayoutPage/LayoutWeb";
import HomePage from "../pages/Web/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignupPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
