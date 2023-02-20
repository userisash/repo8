import React, { useState, useEffect } from "react";
import "./ColorBox.css";

function ChangeBox() {
  const [colorIndex, setColorIndex] = useState(0);
  const [isCircle, setIsCircle] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => prevIndex + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (colorIndex === 5) {
      setIsCircle(true);
    }
  }, [colorIndex]);

  const colors = ["red", "green", "blue", "yellow", "purple", "pink"];

  const boxStyle = {
    backgroundColor: colors[colorIndex % colors.length],
    borderRadius: isCircle ? "50%" : "0",
  };

  return <div className="color-box" style={boxStyle}></div>;
}

export default ChangeBox;
