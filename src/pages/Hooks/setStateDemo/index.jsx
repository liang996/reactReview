import React, { Component } from "react";

export default class setStateDemo extends Component {
  state = {
    count: 0,
    num: 0,
  };
  isAddCount = () => {
    const { count } = this.state;
    //注意点：setState本身是同步方法，但是setState引起react的后续更新动作是异步的（react状态的更新是异步的）
    // this.setState({count:count+1})
    // console.log('first',  this.state.count) //点第一次后，结果是0 ，但页面上是显示1，此处的更新为异步更新

    //如果要实时看最新数据，代码写法为下，setState要传递第二个参数，第二个参数是一个函数
    this.setState({ count: count + 1 }, () => {
      console.log("first", this.state.count);
    });
  };

  isAddNum = () => {
    //函数式setState可以不要获取原来的state，因为函数式setState本身就接受state形参和propsstate形参,对象式state其实是函数式state的（简写方法）语法糖
    this.setState((state, props) => ({ num: state.num + 1 }));
  };
  render() {
    const { count, num } = this.state;
    return (
      <div>
        <h1>count当前求和为:{count}</h1>
        <h1>num当前求和为:{num}</h1>

        <button onClick={this.isAddCount}>对象式setState写法：点我加1</button>
        <button onClick={this.isAddNum}>函数式setState写法：点我加1</button>
      </div>
    );
  }
}
