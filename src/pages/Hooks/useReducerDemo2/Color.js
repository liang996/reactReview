import React, { createContext, useReducer } from "react";
import { UpdateColorType } from "./constant";

export const Mycontext = createContext({});
const reducer = (prestate, action) => {
  const { type, color } = action;
  switch (type) {
    case UpdateColorType:
      return color;

    default:
      return prestate;
  }
};

const { Provider } = Mycontext;
export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, "green");
  return (
    <>
      <Provider value={{ color, dispatch }}>{props.children}</Provider>
    </>
  );
};
