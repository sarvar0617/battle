import React from "react";
import { Outlet } from "react-router-dom";
import TestUser from "./TestUser";

const Layout = () => {
  return (
    <div>
      <Outlet />
      {/* <TestUser /> */}
    </div>
  );
};

export default Layout;
