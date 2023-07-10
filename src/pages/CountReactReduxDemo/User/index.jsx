import React, { Component } from "react";
import { Button } from "antd";
import { nanoid } from "nanoid";
import { connect } from "react-redux";

import { createUserAction as jiaUser } from "../../../redux/actions/user";

class User extends Component {
  isAdd = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value*1;
    let userObj = {
      id: nanoid(),
      name,
      age,
    };
    this.props.jiaUser(userObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    const { count } = this.props;

    return (
      <div>
        <h1>求和组件：当前求和为：{count}</h1>
        <h1>用户信息数据如下：</h1>
        姓名：
        <input
          type="text"
          name="username"
          placeholder="请输入姓名"
          className="input-item"
          ref={(c) => (this.nameNode = c)}
        />
        年龄
        <input
          type="text"
          name="age"
          ref={(c) => (this.ageNode = c)}
          placeholder="请输入年龄"
          className="input-item"
        />
        <Button id="login" className="btn" onClick={this.isAdd}>
          添加用户信息
        </Button>
        <ul>
          {this.props.userInfoArr.map((item) => {
            return (
              <li key={item.id}>
                姓名是：{item.name}，年龄是：{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default connect(
  (states) => ({
    userInfoArr: states.userInfo,
    count: states.countReducer,
  }),
  {
    jiaUser,
  }
)(User);
