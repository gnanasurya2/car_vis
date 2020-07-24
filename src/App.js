import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Scene from "./components/Scene";

function App() {
  const [color, setColor] = useState("hotpink");
  const [backgroundColor, setBackgroundColor] = useState("indigo");
  const [size, setSize] = useState(1);
  const colorHandler = (colour) => {
    setColor(colour);
  };
  const backgroundHandler = (colour) => {
    setBackgroundColor(colour);
  };
  const sizeHandler = (scale) => {
    setSize(scale);
  };
  return (
    <div className="App">
      <SideBar
        colorHandler={colorHandler}
        backgroundColor={backgroundHandler}
        scaleHandler={sizeHandler}
      />
      <Scene color={color} background={backgroundColor} size={size} />
    </div>
  );
}

export default App;
