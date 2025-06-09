import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-gray-300">
        <Sidebar />
        <Outlet />
      </div> 
    </div>
  );
};

export default Layout;
