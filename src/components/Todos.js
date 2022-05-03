import React, { useState, useRef } from "react";

const Todos = (props) => {
  // Initial state for todo list
  const [todo, setTodos] = useState("");
  const input = useRef("");

  // On change, takes uses target value to update state
  const handleChange = (e) => {
    setTodos(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={input}
      />

      <button className="add-btn btn btn-primary">Add</button>
    </div>
  );
};

export default Todos;