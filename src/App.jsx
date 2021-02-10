import React from "react";
import ColorFulMessage from "./components/ColorFulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorFulMessage color="blue">How are you?</ColorFulMessage>
      <ColorFulMessage color="pink">Fuck off.</ColorFulMessage>
      <button onClick={onClickButton}>btn</button>
    </>
  );
};

export default App;
