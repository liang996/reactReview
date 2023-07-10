import React, { Component } from "react";
import { Button, message, Select } from "antd";
import store from "../../../redux/srore";
import {createAddAction,createDelAction,createAddActionAsync} from "../../../redux/CountCompleteReduxAsync/count-actions";

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
    store.dispatch(createAddAction(selectValue));
  };
  isDel = () => {
    const { selectValue } = this.state;
    store.dispatch(createDelAction(selectValue));
  };
  oddAdd = () => {
    const { selectValue } = this.state;
    const { countCompleteReduxAsync } = store.getState();

    if (countCompleteReduxAsync % 2 !== 0) {
      store.dispatch(createAddAction(selectValue));
    } else {
      message.error("当前数不是奇数");
    }
  };
  asynAdd = () => {
    const { selectValue } = this.state;
    store.dispatch(createAddActionAsync(selectValue,500));

    // setTimeout(() => {
    // }, 500);
  };
  render() {
    const { countCompleteReduxAsync } = store.getState();
    return (
      <div style={{ textAlign: "center" }}> 
        <h1 >当前求和为：{countCompleteReduxAsync}</h1>
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
