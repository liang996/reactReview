import React, { Component } from "react";
import "./index.css";

const MyContext = React.createContext();
console.log("MyContext", MyContext);
const { Provider, Consumer } = MyContext;
class A extends Component {
  state = {
    name: "张三",
    age: 18,
  };
  render() {
    // const { name, age } = this.state;
    return (
      <div className="box">
        我是A组件
        <Provider value={{ ...this.state }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="son">
        我是B组件
        <C />
      </div>
    );
  }
}

// class C extends Component {
// // static contextType=MyContext 第一种取值方法： 该方法只适合类组件
//   render() {
// const { name, age}=this.context
//     console.log('first', this.context)
//     return (
//       <div className="son1">
//         我是C组件
//         <h1>来自A组件数据为：姓名：{name},年龄：{age}</h1>
//       </div>
//     );
//   }
// }

function C() {
  return (
    <div className="son1">
      我是C组件    第二种取值方法，利用Consumer： 该方法适合类组件和函数组件
      <h1>
        <Consumer>
          {({ name, age}) => `来自A组件数据为：姓名：${name},年龄：${age}`}
        </Consumer>
      </h1>
    </div>
  );
}

export default A;
