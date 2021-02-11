import React, { useEffect, useState } from "react";
import { ColorFulMessage } from "./components/ColorFulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorFulMessage color="blue">How are you?</ColorFulMessage>
      <ColorFulMessage color="pink">Fuck off.</ColorFulMessage>
      <button onClick={onClickCountUp}>増えるのです</button>
      <br />
      <button onClick={onClickSwitchShowFlag}> on / off </button>
      <p>{num}</p>
      {faceShowFlag && <p>🤪</p>}
    </>
  );
};

export default App;
