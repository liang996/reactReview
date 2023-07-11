import React, { useReducer} from "react";
import { createAddType, createDelType } from "./constant";

export default function Demo() {
  const [count, dispatch] = useReducer((prestate = 0, action) => {
    const { type, data } = action;
    switch (type) {
      case createAddType:
        return prestate + data;
      case createDelType:
        return prestate - data;
      default:
        return prestate;
    }
  }, 0);

  return (
    <div>
      count初始值为：{count} <br />
      <button
        onClick={() => {
          dispatch({ type: createAddType, data: 1 });
        }}
      >
        点击加1
      </button>
      <button
        onClick={() => {
          dispatch({ type: createDelType, data: 1 });
        }}
      >
        点击-1
      </button>
    </div>
  );
}
