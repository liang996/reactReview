import React, { useEffect, useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0); //useState：可以让函数式组件使用状态
  const [name] = useState("李四"); //useState：可以让函数式组件使用状态

  const isAddCount = () => {
    //第一种写法
    // setCount(count + 1);
    //第二种写法 ：函数
    setCount((count1) => {
      return count1 + 1;
    });
  };
  //执行此处会报错，钩子函数不能放在判断语句中
  // if (count > 3) {
  //   useEffect(function updateTitle() {
  //     document.title = count + name;
  //   });
  // }
  return (
    <div>
      <h1>
        求和为：{count} ,姓名是：{name}
      </h1>
      <button onClick={isAddCount}>点我加1</button>
    </div>
  );
}
