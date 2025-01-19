import React, { useLayoutEffect, useRef, useState } from "react";

function LayoutComponent() {
  const divRef = useRef();

  const [divVal, setDivVal] = useState(null);
  useLayoutEffect(() => {
    const { height } = divRef.current.getBoundingClientRect();
    console.log("Height of Div ", height);
    setDivVal(height);
  });

  return <div ref={divRef}>contact height: {divVal}</div>;
}

export default LayoutComponent;
