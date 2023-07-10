import { createUserType } from "../constant";
const info = [{id:"001", name: "1", age: 18 }];
export default function userInfo(preState = info, action) {
  const { type, data } = action;
  switch (type) {
    case createUserType:
      return  [data,...preState]  ;
    default:
      return preState;
  }
}
