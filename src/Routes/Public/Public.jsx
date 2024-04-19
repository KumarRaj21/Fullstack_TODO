import React from "react";
import { Route, Routes } from 'react-router-dom';

// Components
import Landingpage from "../../components/Landingpage";
import Login from "../../components/Login";
import Signup from "../../components/Signup";

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
