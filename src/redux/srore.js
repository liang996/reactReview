import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./CountSimplifyReducer/count-reducer"; //简化版reducer
import countCompleteReducer from "./CountCompleteRedux/count-reducer"; //完整版reducer

import countCompleteReduxAsync from "./CountCompleteReduxAsync/count-reducer"; //异步版reducer
import countReducersMore from "./reducers/count"; //多组件版reducer
import userInfo from "./reducers/user"; //多组件版reducer


const store = configureStore({
  reducer: {
    countReducer,
    countCompleteReducer,
    countCompleteReduxAsync,
    countReducersMore,
    userInfo
  },
});

export default store;
