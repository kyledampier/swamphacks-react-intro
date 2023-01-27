import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  let buttonStyle = {
    padding: "1rem 2rem",
    backgroundColor: "red",
    color: "white",
    fontSize: "2rem",
    border: "none",
    borderRadius: "0.5em",
    outline: "none",
    cursor: "pointer",
  };

  if (props.color) {
    buttonStyle.backgroundColor = props.color;
  }

  // Merge the style prop with the buttonStyle object
  if (props.style) {
    Object.assign(buttonStyle, props.style);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <button style={buttonStyle} onClick={increment}>
      {count}
    </button>
  );
}
