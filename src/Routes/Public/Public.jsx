import React from "react";
import { Route, Routes } from 'react-router-dom';

// Components
import Landingpage from "../../components/Landingpage";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/SignUp/SignUp";

function Public() {
  return (
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default Public;
