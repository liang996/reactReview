import React, { Component } from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import { Button } from "antd";

import "./Home.css";

class Home extends Component {
  isMy = () => {
    let data = { userName: "liang", password: "123" };
    // //传递search参数
    // this.props.history.push(
    //   `/my?userName=${data.userName}&password=${data.password}`
    // );
    //传递query参数

    // this.props.history.push({
    //   pathname: "/my",
    //   query:data,
    // });

    //传递state参数
    this.props.history.push({
      pathname: "/my",
      state: data,
    });
  };
  render() {
    let user = JSON.parse(localStorage.getItem("obj")) || {};
    // 获取token
    const isLogin = user?.token ? true : false;
    if (!isLogin) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <ul className="NavBottom">
          <li>
            <NavLink activeClassName="fontBg" to="/home">
              首页
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/weather">
              天气
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/jokes">
              段子
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/countPure">
              求和案例-纯react
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/countSimplify">
              求和案例-redux精简版
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/countComplete">
              求和案例-redux完整版
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/countCompleteAsync">
              求和案例-redux异步版
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/react-redux">
              求和案例-react-redux版
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/countCompleteMore">
              求和案例-react-redux版(多组件共享数据)
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/hooks">
              hooks
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="fontBg" to="/context">
              context
            </NavLink>
          </li>
          <li>
            <Button onClick={this.isMy} type="text">
              我的
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(Home);
