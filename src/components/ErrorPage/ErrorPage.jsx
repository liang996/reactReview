import React, { Component } from "react";
import "./ErrorPage.css";

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="father">
        <div className="son">您访问的页面不存在！</div>
      </div>
    );
  }
}
