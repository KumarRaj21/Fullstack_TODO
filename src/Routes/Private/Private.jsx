import React from "react";
import {Route,Routes} from "react-router-dom";

import Alltasks from "../../components/Alltasks";
import Inprogress from "../../components/Inprogress";
import Todo from "../../components/Todo";
import Done from "../../components/Done";

function Private() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Alltasks />} />
        <Route path="/inprogress" element={<Inprogress />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </div>
  );
}

export default Private;
