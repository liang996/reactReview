import React from "react";
import ReactDOM from "react-dom";

export default function Demo() {
  const [count, setCount] = React.useState(0); //useState：可以让函数式组件使用状态
  const [name, setName] = React.useState("张三"); //useState：可以让函数式组件使用状态

  //注意：useEffect:就是可以让你在函数组件中使用生命周期钩子，useEffect第一个参数传递函数，第二个useEffect第二个参数选传，如果传递空数组就是谁都不监测，如果第二个参数不写，就是谁都监测，如果空数组里面有值，就是监测该值
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000); //useEffect第二个参数传递空数组，就相当于componentDidMount（）生命周期钩子
    return () => { //useEffect第一个参数如果有返回值，就相当于componentWillUnMount（）生命周期钩子
      clearInterval(timer);
    };
  }, []);
  // React.useEffect(()=>{
  //   console.log('first') //useEffect第二个参数空数组里面传递值，就相当于componentDidMount（）生命周期钩子和componentDidUpdate()生命周期钩子
  // },[count])
  const isSetName = () => {
    setName("谭拉奥");
  };
  const unMount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  return (
    <div>
      <h1>
        求和为：{count},改变后的名称：{name}
      </h1>
      <button onClick={isSetName}>点我改名</button>
      <button onClick={unMount}>点我卸载组件</button>
    </div>
  );
}
