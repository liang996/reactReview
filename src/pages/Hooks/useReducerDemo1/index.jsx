import React, { useContext } from "react";
import "./index.css";
import { Color, Mycontext } from "./Color";

function A() {
  const { color } = useContext(Mycontext);
  return (
    <div className="son1" style={{ color }}>
      我是A组件
    </div>
  );
}

function B() {
  const { color } = useContext(Mycontext);
  console.log("color11111111", color);
  return (
    <div className="son2" style={{ color }}>
      我是B组件
    </div>
  );
}
function AB() {
  return (
    <div className="box">
      我是AB组件
      <Color>
        <A />
        <B />
      </Color>
    </div>
  );
}

export default AB;
