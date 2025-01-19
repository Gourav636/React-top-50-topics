import Child from "./child";
import { useState } from "react";

function ReactMemoCaller() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <Child name={count} />
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default ReactMemoCaller;
