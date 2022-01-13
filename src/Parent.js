import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState (randomColor);

  //passing data from child to parent comes//
  //in the form of parameters in the parent function//
  function handleChangeColor(newChildColor){
    const newColor = getRandomColor();
    setColor(newColor);
    setChildColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor = {handleChangeColor} color = {childColor}/>
      <Child onChangeColor = {handleChangeColor} color = {childColor}/>
    </div>
  );
}

export default Parent;
