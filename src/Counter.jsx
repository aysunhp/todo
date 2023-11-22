import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };

    case "decrease":
      return state.count > 0 ? { count: state.count - 1 } : { count: 0 };

    case "reset":
      return { count: 0 };

    default:
      break;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        Increase
      </button>
      <h3>{state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        Decrease
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
