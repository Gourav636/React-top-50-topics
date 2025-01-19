import { useState } from "react";
import "./commonStyles.css";

function ControlledForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const onChangeHandle = (event) => {
    setName(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      setError("name should not be empty");
    } else {
      setError("");
      alert(`Name is  ${name}`);
    }
  };
  return (
    <div className="container">
      <form onSubmit={onFormSubmit}>
        <label>
          Name: <input type="text" onChange={onChangeHandle} />
        </label>
        <button type="submit">click me</button>
      </form>
      {error && <span style={{ color: "red" }}> {error}</span>}
    </div>
  );
}

export default ControlledForm;
