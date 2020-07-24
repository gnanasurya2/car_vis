import React from "react";
import styles from "../styles/SideBar.module.css";
import Accordian from "./Accordian";

const colorData = ["hotpink", "blue", "green", "black"];
const backgroundData = ["indigo", "green", "cyan"];
const scale = [1, 2, 3];
const SideBar = (props) => {
  return (
    <div className={styles.wrapper}>
      <Accordian
        title="color"
        items={colorData}
        click={(color) => props.colorHandler(colorData[color])}
      />
      <Accordian
        title="background color"
        items={backgroundData}
        click={(color) => props.backgroundColor(backgroundData[color])}
      />
      <Accordian
        title="Size"
        items={scale}
        click={(size) => props.scaleHandler(scale[size])}
      />
    </div>
  );
};

export default SideBar;
