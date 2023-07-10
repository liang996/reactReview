import React, { Component } from "react";
import { Button, message, Select } from "antd";
import store from "../../../redux/srore";

export default class Count extends Component {
  state = { selectValue: 0 };
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  handleChange = (selectValue) => {
    this.setState({ selectValue });
  };
  isAdd = () => {
    const { selectValue } = this.state;
    console.log("selectValue :>> ", typeof selectValue);
    store.dispatch({ type: "add", data: selectValue });
  };
  isDel = () => {
    const { selectValue } = this.state;
    store.dispatch({ type: "del", data: selectValue });
  };
  oddAdd = () => {
    const { selectValue } = this.state;
    const { countReducer } = store.getState();

    if (countReducer % 2 !== 0) {
      store.dispatch({ type: "add", data: selectValue });
    } else {
      message.error("当前数不是奇数");
    }
  };
  asynAdd = () => {
    const { selectValue } = this.state;
    setTimeout(() => {
      store.dispatch({ type: "add", data: selectValue });
    }, 500);
  };
  render() {
    const { countReducer } = store.getState();
    return (
      <div style={{ textAlign: "center" }}> 
        <h1 >当前求和为：{countReducer}</h1>
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
