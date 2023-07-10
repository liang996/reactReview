import React from "react";

export default function Demo() {
  const [count, setCount] = React.useState(0); //useState：可以让函数式组件使用状态
  const isAddCount = () => {
     //第一种写法 
    // setCount(count + 1);
     //第二种写法 ：函数
    setCount((count1)=>{
      return count1 + 1
    })
  };
  return (
    <div>
      <h1>求和为：{count}</h1>
      <button onClick={isAddCount}>点我加1</button>
    </div>
  );
}
