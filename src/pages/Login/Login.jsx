import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, message } from "antd";

import "./Login.css";

export default class Login extends Component {
  state = {
    userName: "",
    password: "",
  };

  saveFormData = (dataType) => {
    return (e) => {
      this.setState({ [dataType]: e.target.value });
    };
  };
  isLogin = () => {
    const { userName, password } = this.state;

    let user = JSON.parse(localStorage.getItem("usererror")) || {};
    //判断输入内容是否为空
    if (userName.trim() === "" || password.trim() === "") {
      message.error("输入内容不能为空");

      return; //拦截
    } else if (
      (Object.keys(user).length > 0 && userName !== user.userName) ||
      password !== user.password
    ) {
      message.error("您还未注册，请先注册");

      return; //拦截
    } else {
      // //传递search参数
      // this.props.history.push(
      //   `/home?userName=${userName}&password=${password}`
      // );
      //传递query参数

      // this.props.history.push({
      //   pathname: "/home",
      //   query: { userName, password },
      // });

      let obj = {
        auth: false,
        token: "admin12345678",
      };
      localStorage.setItem("obj", JSON.stringify(obj));

      //传递state参数
      this.props.history.push({
        pathname: "/home",
        state: { userName, password },
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="login-wrapper">
          <div className="header">react管理系统</div>
          <div className="form-wrapper">
            账号：
            <input
              type="text"
              name="username"
              placeholder="请输入账号"
              className="input-item"
              onChange={this.saveFormData("userName")}
            />
            密码：
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              className="input-item"
              onChange={this.saveFormData("password")}
            />
            <Button id="login" className="btn" onClick={this.isLogin}>
              登录
            </Button>
            {/* <div  id="login" className="btn" onClick={this.isLogin}>
              登录
            </div> */}
          </div>
          <div className="msg">
            还没有账号? <Link to="/register">去注册</Link>
          </div>
        </div>
      </div>
    );
  }
}
