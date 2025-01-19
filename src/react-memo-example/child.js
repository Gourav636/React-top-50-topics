import React from "react";

const Child = React.memo(({ name }) => {
  console.log("child component rendered");
  return (
    <div>
      <h1> Name : {name} !</h1>
    </div>
  );
});

export default Child;
