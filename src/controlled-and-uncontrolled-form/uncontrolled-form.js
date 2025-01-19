import { useRef, useState } from "react";
import "./commonStyles.css";

function UnControlledForm() {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = inputRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert(`Email: ${email}`);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          email :
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit"> validate</button>
      </form>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

export default UnControlledForm;
