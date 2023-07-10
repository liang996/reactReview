import React, { Component } from "react";
import { Button, message, Select } from "antd";

export default class Count extends Component {
  state = { count: 0, selectValue: 0 };
  handleChange = (selectValue) => {
    this.setState({ selectValue });
  };
  isAdd = () => {
    const { count, selectValue } = this.state;
    console.log("selectValue :>> ", typeof selectValue);
    this.setState({ count: count + selectValue });
  };
  isDel = () => {
    const { count, selectValue } = this.state;
    this.setState({ count: count - selectValue });
  };
  oddAdd = () => {
    const { count, selectValue } = this.state;
    console.log("selectValue :>> ", selectValue);
    console.log("count :>> ", count);

    if (count % 2 !== 0) {
      this.setState({ count: count + selectValue });
    } else {
      message.error("当前数不是奇数");
    }
  };
  asynAdd = () => {
    const { count, selectValue } = this.state;
    setTimeout(() => {
      this.setState({ count: count + selectValue });
    }, 500);
  };
  render() {
    const { count } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h1>当前求和为：{count}</h1>
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
      </div>
    );
  }
}
