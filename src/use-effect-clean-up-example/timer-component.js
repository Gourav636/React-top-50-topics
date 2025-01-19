import { useState, useEffect } from "react";
function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}

export default TimerComponent;
