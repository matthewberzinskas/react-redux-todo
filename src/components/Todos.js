import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import uuid from "react-uuid";

const Todos = (props) => {
  console.log("props", props);

  // Initial state for todo list
  const [todo, setTodos] = useState("");
  const input = useRef("");

  // ** ADD ** sets current input to new Todo object
  const add = () => {
    if (input === "") {
      alert("Input is empty.");
    } else {
      props.addTodo({
        id: uuid(),
        data: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  // ** CHANGE ** takes uses target value to update state
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

      <button className="add-btn btn btn-primary" onClick={() => add()}>
        Add
      </button>
      <div className="todo-list">
        <ul>
          {props.todos.length > 0 &&
            props.todos.map((todo) => {
              return <li key={todo.id}>{todo.data}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
