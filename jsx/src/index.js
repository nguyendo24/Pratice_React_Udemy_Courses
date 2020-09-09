// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Create React component
const App = () => {
  const buttonText = {
    text: "click me",
  };

  const labelName = " Enter name please:";
  const style = { backgroundColor: "blue", color: "red" };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelName}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the create component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
