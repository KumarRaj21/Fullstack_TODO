import React from "react";
import { Route, Routes } from 'react-router-dom';

// Components
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/SignUp/SignUp";

function Public() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default Public;
