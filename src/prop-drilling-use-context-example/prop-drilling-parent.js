import React, { useContext } from "react";

const ThemeContext = React.createContext();

function PropDrillingParent() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <h1>Context API Example</h1>
          <ThemeToggler />
          <DisplayTheme />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default PropDrillingParent;
