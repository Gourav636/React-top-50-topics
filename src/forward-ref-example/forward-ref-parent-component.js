import React, { forwardRef } from "react";

const InputWithRef = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

const ForwardRefParentComponent = () => {
  const inputRef = React.createRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <InputWithRef ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default ForwardRefParentComponent;
