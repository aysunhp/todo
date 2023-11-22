import React from "react";
import { useState } from "react";
import { useDebugValue } from "react";

const App = () => {
  const [inpValue, setInpValue] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(inpValue);
  console.log(todos);
  return (
    <>
      <h1>Todo</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setInpValue("");
        }}
      >
        <input
          type="text"
          value={inpValue}
          placeholder="Enter new todo"
          onChange={(e) => {
            setInpValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos([...todos, inpValue]);
            setInpValue("");
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
