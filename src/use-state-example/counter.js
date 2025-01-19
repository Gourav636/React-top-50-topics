import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCounterState = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p> Counter {counter}</p>
      <br></br>
      <button onClick={handleCounterState}>increment</button>
    </div>
  );
}

export default Counter;
