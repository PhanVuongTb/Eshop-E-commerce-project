import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default LayoutAdmin;
