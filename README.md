# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## react 路由传递参数

1.params 参数
路由链接(携带参数): <Link to='/demo/test/tom/18 }>详情</Link>注册路山(声明接收):<Route path="/demo/test/:name/:age”component=[Test}/>接收参数: thisprops,match.params
路由链接(携带参数): Link to='/demo/test?name=tom&age=18'}>详情</Link>注册路由(无需声明，正常注册即可): <Route path="/demo/test”component={Test}/>按收参数: this.props.location.search
2.search 参数
备注: 获取到的 search 是 urlencoded 编码字符串，需要借助 querystring 解析 3.state 参数
路由链接(携带参数):<Link to=[(path:'/demo/test',state:(name;'tom',age:18)}}>详情</Link>注册路由(无需声明，正常注册即可):<Route path="/demo/test”component={Test}/>庆收参数: this.props.location,state
备注: 刷新也可以保留住参数

## BrowserRouter 与 HashRouter 的区别

1.底层原理不一样:
BrowserRouter 使用的是 H5 的 history API，不兼容 IE9 及以下版本。
HashRouter 使用的是 URL 的哈希值。
2.ur1 表现形式不一样 BrowserRouter 的路径中没有#,例如: localhost;39/demo/testHashRouter 的路径包含#,例如: localhost:3909/#/demo/test3.刷新后对路由 state 参数的影响
(1).BrowserRouter 没有任何影响，因为 state 保存在 history 对象中。
(2).HashRouter 刷新后会导致路由 state 参数的丢失。
4。备注: HashRouter 可以用于解决一此路径错误相关的问题。

## 求和案例 redux 精简版

(1)。去除 Count 组件自身的状态
(2).src 下建立:
-src
-redux
-store.js
-count reducer.js
(3).store.js:
1).引入 redux 中的 createstore 函数，创建一个 store2).createstore 调用时要传入一个为其服务的 reducer3)。记得暴露 store 对象
(4).count reducer.js:
1).reducer 的本质是一个函数，接收: prestate,action，返回加工后的状态 2).reducer 有两个作用: 初始化状态，加工状态
3).reducer 被第一次调用时，是 store 自动他发的，传递的 prestate 是 undefined
(5).在 index.js 中检测 store 中状态的改变，一旦发生改变重新渲染<App/>备注: redux 只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

## react-redux 模型图

1.所有的 UI 组件都应该包裹一个容器组件，他们是父子关系。 2.容器组件是真正和 redux 打交道的，里面可以随意的使用 redux 的 api。
3.UI 组件中不能使用任何 redux 的 api。 4.容器组件会传给 UI 组件:
(1)redux 中所保存的状态。
(2).用于操作状态的方法 5.备注:容器给 UI 传递:状态、操作状态的方法，均通过 props 传递。

## 求和案例 react-redux 基本使用

(1).明确两个概念:
1).UI 组件:不能使用任何 redux 的 api，只负责页面的呈现、交互等。
2).容器组件:负责和 redux 通信，将结果交给 UI 组件。
(2).如何创建一个容器组件-华 react-redux 的 connect 函数 connect(mapStateToprops,mapDispatchToprops)(UI 组件)-mapstateToProps:映射状态，返回值是一个对象-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
3).备注: 容器组件中的 store 是靠 props 传进去的，而不是在容器组件中直接引入

## memo，useMemo，useCallback的使用以及区别

memo用来优化函数组件的重复渲染行为，针对的是一个组件

memo 和 useMemo本质都是用同样的算法来判定依赖是否发生改变，继而决定是否触发memo或者useMemo中的逻辑，利用memo就可以避免不必要的重复计算，减少资源浪费

useCallback 和 useMemo 都是react可用于性能优化的内置hooks。

useCallback 和 useMemo 两者的区别在于：useCallback缓存的是一个函数，而useMemo缓存的是计算结果。


useMemo和useCallback都接收两个参数，第一个参数为fn，第二个参数为[]，数组中是变化依赖的参数 memo则可以直接作用于组件
