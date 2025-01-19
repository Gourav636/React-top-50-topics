import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function CounterExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button> &nbsp;
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default CounterExample;
