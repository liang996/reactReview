//默认暴露一个CountCompleteReducer函数
import { createAddType, createDelType } from "./constant";

export default function CountCompleteReducer(prestate = 0, action) {
  console.log("prestate", prestate);
  console.log("action", action);
  const { type, data } = action;
  switch (type) {
    case createAddType:
      return prestate + data;
    case createDelType:
      return prestate - data;
    default:
      return 1;
  }
}
