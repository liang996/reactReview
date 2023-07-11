import React, { useContext } from "react";
import "./index.css";
import { Color, Mycontext } from "./Color";
import { UpdateColorType } from "./constant";

function A() {
  const { dispatch } = useContext(Mycontext);
  console.log("color22222", dispatch);
  // 获取color
  const { color } = useContext(Mycontext);
  return (
    <div>
      <div style={{ color: color }}>字体颜色为{color}</div>
    </div>
  );
}

function B() {
  const { dispatch } = useContext(Mycontext);
  console.log("color111", dispatch);
  return (
    <>
      <button
        className="son22"
        onClick={() => {
          dispatch({ type: UpdateColorType, color: "hotpink" });
        }}
      >
        点击文字变粉红
      </button>
      <button
        className="son11"
        onClick={() => {
          dispatch({ type: UpdateColorType, color: "yellow" });
        }}
      >
        点击文字变黄色
      </button>
    </>
  );
}
function AB() {
  return (
    <div className="box">
      颜色案例
      <Color>
        <A /> 
        <br/>
        <B />
      </Color>
    </div>
  );
}

export default AB;
