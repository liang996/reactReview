import React, { Component } from "react";
import { Button, message, Select } from "antd";
import { connect } from "react-redux";
import User from "../User";

import {
  createAddAction as jia,
  createDelAction as jian,
} from "../../../redux/actions/count";
// 创建ui组件：Count
class Count extends Component {
  state = { selectValue: 0 };
  handleChange = (selectValue) => {
    this.setState({ selectValue });
  };
  isAdd = () => {
    const { selectValue } = this.state;
    console.log(" this.props,,,,,,,,,,,,,,,,,,,,,,,,,,,,", this.props);
    this.props.jia(selectValue);
  };
  isDel = () => {
    const { selectValue } = this.state;
    this.props.jian(selectValue);
  };
  oddAdd = () => {
    const { selectValue } = this.state;

    if (this.props.count % 2 !== 0) {
      this.props.jia(selectValue);
    } else {
      message.error("当前数不是奇数");
    }
  };
  asynAdd = () => {
    const { selectValue } = this.state;
    setTimeout(() => {
      this.props.jia(selectValue);
    }, 500);
  };
  render() {
    const { count, userLen } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <h1>求和组件：当前求和为：{count}</h1>
        <h1>用户组件数据：当前用户的数据为：{userLen}</h1>
        <Select
          defaultValue={0}
          style={{ width: 120 }}
          onChange={this.handleChange}
          options={[
            {
              value: 1,
            },
            {
              value: 2,
            },
            {
              value: 3,
            },
          ]}
        />
        &nbsp;
        <Button onClick={this.isAdd}>+</Button>&nbsp;
        <Button onClick={this.isDel}>-</Button>&nbsp;
        <Button onClick={this.oddAdd}>奇数求和</Button>&nbsp;
        <Button onClick={this.asynAdd}>异步求和</Button>&nbsp;
        <User />
      </div>
    );
  }
}

export default connect(
  (states) => ({
    count: states.countReducer,
    userLen: states.userInfo.length,
  }),
  {
    jia,
    jian,
  }
)(Count);
