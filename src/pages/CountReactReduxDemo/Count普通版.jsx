import React, { Component } from "react";
import { Button, message, Select } from "antd";
import { connect } from "react-redux";
import {
  createAddAction,
  createDelAction,
} from "../../redux/CountCompleteRedux/count-actions";
// 创建ui组件：Count
class Count extends Component {
  state = { selectValue: 0 };
  handleChange = (selectValue) => {
    this.setState({ selectValue });
  };
  isAdd = () => {
    const { selectValue } = this.state;
    console.log(' this.props,,,,,,,,,,,,,,,,,,,,,,,,,,,,',  this.props)
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
    const { count } = this.props;
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
//mapStateToProps为redux中所保存的状态 (映射状态)
//mapDispatchToProps为用于操作状态的方法 (映射操作状态的方法)

const mapStateToProps = (states) => ({ count: states.countReducer });
const mapDispatchToProps = (dispatch) => {
  return {
    jia: (data) => dispatch(createAddAction(data)),
    jian: (data) => dispatch(createDelAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
