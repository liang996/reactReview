import { createAddType, createDelType } from "./constant";
// import { createAsyncThunk } from "@reduxjs/toolkit";
/**
 *  createAddAction：操作动作（加）
 *  createDelAction：操作动作（减）
 * 一般情况下action返回的是普通对象的叫同步action,如果返回的是函数则为异步action
 * */
export const createAddAction = (data) => ({ type: createAddType, data });

export const createDelAction = (data) => ({ type: createDelType, data });

//暂时还未实现
export const createAddActionAsync = (data, timeout) => {
    console.log('timeout', timeout)
    return (dispatch) => {
        setTimeout(() => {
           dispatch(createAddAction(data))
        }, timeout);
    }
}

// export const createAddActionAsync = (data, timeout) => {
//   console.log("timeout11111111111",data,  timeout);
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(createAddAction(data));
//     }, timeout);
//   };
// };
// export const testAsync = (data, timeout) => {
//   createAsyncThunk(
//     `11`,
//     //发出一个请求，这里用的是axios
//     createAddActionAsync(data, timeout)
//   );
// };
