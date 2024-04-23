import React from "react";
import { Route, Routes } from "react-router-dom";

import Alltasks from "../../components/Alltasks";
import Inprogress from "../../components/Inprogress";
// import Todo from "../../components/Todo";
import Done from "../../components/Done";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import "./Private.css";

function Private() {
  return (
    <div className="private_page">
      <div className="sideBar">
        <Navbar />
      </div>
      <div className="mainContainer">
        <Header/>
        <Routes>
          <Route path="/" element={<Alltasks />} />
          <Route path="/inprogress" element={<Inprogress />} />
          {/* <Route path="/todo" element={<Todo />} /> */}
          <Route path="/done" element={<Done />} />
        </Routes>
      </div>
    </div>
  );
}

export default Private;
