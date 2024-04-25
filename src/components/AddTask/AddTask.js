import React from "react";
import { useState } from "react";
import "./AddTask.css";
const Addtask = (props) => {
  const [invalue, setinvalue] = useState("");
  const [desvalue, setdesvalue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    setinvalue("");
    setdesvalue("");
  };
  return props.trigger ? (
    <div className="popup">
      <div className="popup-in">
        <div className="addhead">
          <h2>Add a Task</h2>
          <button onClick={() => props.settrigger(!props.trigger)}>
            close
          </button>
        </div>
        <div className="mid-div"></div>
        <form onSubmit={handlesubmit} className="TodoForm">
          <input
            type="text"
            value={invalue}
            onChange={(e) => {
              setinvalue(e.target.value);
            }}
            className="todo-input"
            placeholder="What is the task today?"
          />
          <textarea
            value={desvalue}
            onChange={(e) => {
              setdesvalue(e.target.value);
            }}
            className="description"
            placeholder="Description"
          ></textarea>
          <button className="todo-btn" onClick={handlesubmit}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Addtask;
