import React, { useRef, useState } from "react";
import styles from "../styles/Accordian.module.css";

const Accordian = (props) => {
  const panelRef = useRef(null);
  const [symbol, setSymbol] = useState("+");
  const ToggleHandler = () => {
    if (panelRef.current.style.maxHeight) {
      panelRef.current.style.maxHeight = null;
      setSymbol("+");
    } else {
      panelRef.current.style.maxHeight = panelRef.current.scrollHeight + "px";
      setSymbol("-");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{props.title}</h2>
        <button className={styles.toggle} onClick={ToggleHandler}>
          {symbol}
        </button>
      </div>
      <div className={styles.panel} ref={panelRef}>
        <ul className={styles.list}>
          {props.items.map((ele, index) => (
            <li key={index} onClick={() => props.click(index)}>
              {ele}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordian;
