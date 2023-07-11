import React, { createContext } from "react";
export const Mycontext = createContext();

const { Provider } = Mycontext;
export const Color = (props)=> {
  return (
    <>
      <Provider value={{ color: "red" }}>{props.children}</Provider>
    </>
  );
}
