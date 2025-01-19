function CallbackChild({ onClick }) {
  console.log("callback e.g Child rendered");
  return (
    <>
      <button onClick={onClick}>click me </button>
    </>
  );
}

export default CallbackChild;
