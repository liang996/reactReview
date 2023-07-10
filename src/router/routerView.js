import { Route, Switch } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const RouterView = function (props) {
  return (
    // Switch用于提高路由匹配效率，匹配规则为，找到第一个匹配到的路由，就停止
    <Switch>
      {props.routes &&
        props.routes.map((item, index) => (
          <Route
          exact={item.exact}
          replace
            key={index}
            // path={item.path}
            path={item.path}
            // component={item.component}
      
            render={(props) => (
              <item.component {...props} routes={item.childrens} />
            )}
          />
        ))}
      {/* 路由没有匹配到走404页面 */}
      <Route component={ErrorPage} />
    </Switch>
  );
};
