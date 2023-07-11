import React, { useState, useContext, createContext } from "react";

const MyContext = createContext(); //创建上下文
const { Provider } = MyContext;


function Son() {
  const  count  = useContext(MyContext); //接受用这个useContext
console.log('count', count)
  return (
    <h1>
      接收父组件 count值为： {count}
      <br />
    </h1>
  );
}
export default function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      count初始值为：{count} <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击加1
      </button>
      <Provider value={count}>
        <Son />
      </Provider>
    </div>
  );
}
