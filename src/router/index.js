import Login from "../pages/Login/Login";
import Weather from "../pages/Weather/Weather";
import CountPure from "../pages/reduxDemo/Count/Count"; //求和案例-纯react
import CountSimplify from "../pages/reduxDemo/CountSimplify/CountSimplify"; // 求和案例-redux精简版
import CountComplete from "../pages/reduxDemo/CountComplete/CountComplete"; //求和案例-redux完整版
import CountCompleteAsync from "../pages/reduxDemo/CountCompleteAsync/CountCompleteAsync"; //求和案例-redux完整版
import ReactReduxDemo from "../pages/CountReactReduxDemo/Count"; //求和案例-react-redux版
import CountCompleteMore from "../pages/CountReactReduxDemo/CountCompleteMore/CountCompleteMore"; //多组件共享
import Hooks from "../pages/Hooks";
import UseState from "../pages/Hooks/useState";
import UseEffect from "../pages/Hooks/useEffect";
import SetState from "../pages/Hooks/setStateDemo";
import UseRef from "../pages/Hooks/useRef";

import My from "../pages/My/My";
import Home from "../pages/Home/Home";
import Message from "../pages/Home/Message/Message";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Auth from "../pages/Auth/Auth";

import Jokes from "../pages/Jokes/Jokes";
import Register from "../pages/Register/Register";

export const routes = [
  {
    path: "/",
    component: Login,
    exact: true, //是否为严格模式
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: ErrorPage,
  },
  {
    path: "/Auth",
    component: Auth,
  },

  {
    path: "/home",
    component: Home,
    auth: true,
    childrens: [
      {
        path: "/home/message",
        component: Message,
      },
    ],
  },
  {
    path: "/countPure",
    component: CountPure,
  },
  {
    path: "/countSimplify",
    component: CountSimplify,
  },
  {
    path: "/countCompleteAsync",
    component: CountCompleteAsync,
  },
  {
    path: "/countComplete",
    component: CountComplete,
  },
  {
    path: "/countCompleteMore",
    component: CountCompleteMore,
  },
  {
    path: "/hooks",
    component: Hooks,
    childrens: [
      {
        path: "/hooks/useState",
        component: UseState,
        exact: false,
      },
      {
        path: "/hooks/useEffects",
        component: UseEffect,
      },
      {
        path: "/hooks/setState",
        component: SetState,
      },
      {
        path: "/hooks/useRef",
        component: UseRef,
      },
    ],
  },
  {
    path: "/react-redux",
    component: ReactReduxDemo,
  },
  {
    path: "/weather",
    component: Weather,
  },
  {
    path: "/my",
    component: My,
  },
  {
    path: "/jokes",
    component: Jokes,
  },
  {
    path: "/register",
    component: Register,
  },
];
