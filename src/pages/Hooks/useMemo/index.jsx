import React,{useState,useMemo} from "react";

export default function Demo() {
  const [count, setCount] = useState(0); //useState：可以让函数式组件使用状态
  const [name, setName] = useState("张三"); //useState：可以让函数式组件使用状态

  const isAddCount = () => {
    // 第一种写法 
    setCount(count + 1);
   
  };
  return (
    <div>
      <h1>求和为：{count}，名称为：{name}</h1>
      <button onClick={isAddCount}>点我加1</button>
      <button onClick={()=>{ setName("李四");}}>点我改名</button>
      <Son name={name}>{count}</Son>
    </div>
  );
}


 function Son({name,children}) {
  function countChange(n) { //数字改变
    console.log('name', n) //现在的问题是:父组件按钮每次被点击，该打印都会被执行，说明父组件任何状态发生变化，子组件都会被渲染一遍，这样就很消耗性能
    return   `我来自子组件的名称:${n}` 
  }
const  changeCount=useMemo(()=>{countChange(children)},[children])
  return (
    <div>
      求和为：{changeCount}，名称为：{name}

    </div>
  )
}
