import React, { useState, useCallback } from "react";

export default function Demo() {
  const [count, setCount] = useState(0); //useState：可以让函数式组件使用状态

  const isAddCount = () => {
    // 第一种写法
    setCount(count + 1);
  };
  // const isClick = () => {}; //每次点击，子组件都会被渲染一遍
  const isClick =useCallback(() => {},[]) 
  return (
    <div>
      <h1>求和为：{count}</h1>
      <button onClick={isAddCount}>点我加1</button>

      <Son click={isClick} />
    </div>
  );
}

// function Son() { ////现在的问题是:父组件按钮每次被点击，该打印都会被执行，说明父组件任何状态发生变化，子组件都会被渲染一遍
//   console.log("Son被触发");
//   return <div>我是子组件</div>;
// }
//React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。它用于阻止子组件重新渲染，memo是react的一种缓存技术，这个函数可以检测从父组件接收的props,并且在父组件改变state的时候比对这个state是否是本组件在使用，如果不是，则拒绝重新渲染。
let Son = React.memo(function Son() {
  ////现在的问题是:父组件按钮每次被点击，该打印都会被执行，说明父组件任何状态发生变化，子组件都会被渲染一遍
  console.log("Son被触发");
  return <div>我是子组件</div>;
});
