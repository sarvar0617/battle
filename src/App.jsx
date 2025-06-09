import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./components/ProtectRoute";
import Layout from "./Layout";
import Profile from "./Profile";
import Group from "./pages/Group";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* ochiq routerlar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*routerlar himoyalangan qism */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* ochiq routerlar */}
          <Route index element={<Profile />} />
          <Route path="group/:id" element={<Group />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
