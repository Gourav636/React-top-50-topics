import { useCallback } from "react";
import Child from "./callback-child";

function CallbackParent() {
  const handleClick = useCallback(() => {
    () => {
      console.log(" callback e.g Parent clicked");
    };
  }, []);

  return (
    <>
      <Child onClick={handleClick} />
    </>
  );
}

export default CallbackParent;
