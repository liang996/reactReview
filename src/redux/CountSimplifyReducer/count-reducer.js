//默认暴露一个countReducer函数
export default function countReducer(prestate = 0, action){
    console.log("prestate", prestate);
    console.log("action", action);
    const { type, data } = action;
    switch (type) {
      case "add":
        return prestate + data;
      case "del":
        return prestate - data;
      default:
        return 0;
    }
  };