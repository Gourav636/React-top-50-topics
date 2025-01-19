import { useContext } from "react";

function PropDrillingChild() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default PropDrillingChild;
