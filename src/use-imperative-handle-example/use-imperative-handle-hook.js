import { useRef, useImperativeHandle, forwardRef } from "react";

const CustomInput = forwardRef((prop, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },

    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} {...prop} />;
});

const ParentComponent = () => {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      &nbsp;
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
};

export default ParentComponent;
