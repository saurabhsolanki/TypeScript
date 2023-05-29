import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Tasks from "./Tasks";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/tasks/:id"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
