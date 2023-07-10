import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./index.css";

class Hooks extends Component {
  render() {
    console.log("first11111111111111", this.props);
    return (
      <div>
        <ul>
          <li>
            <NavLink
              activeClassName="fontBg"
              to={`${this.props.match.url}/useState`}
            >
              useState
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="fontBg"
              to={`${this.props.match.url}/setState`}
            >
              setState的两种写法
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="fontBg"
              to={`${this.props.match.url}/useEffects`}
            >
              useEffect
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="fontBg"
              to={`${this.props.match.url}/useRef`}
            >
              useRef
            </NavLink>
          </li>
          <hr />
          {this.props.routes &&
            this.props.routes.map((item, index) => (
              <Route
                exact={item.exact}
                replace
                key={index}
                path={item.path}
                render={(props) => (
                  <item.component {...props} routes={item.childrens} />
                )}
              />
            ))}
        </ul>
      </div>
    );
  }
}
export default withRouter(Hooks);
