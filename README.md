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

## react路由传递参数

1.params参数
路由链接(携带参数): <Link to='/demo/test/tom/18 }>详情</Link>注册路山(声明接收):<Route path="/demo/test/:name/:age”component=[Test}/>接收参数: thisprops,match.params
路由链接(携带参数): Link to='/demo/test?name=tom&age=18'}>详情</Link>注册路由(无需声明，正常注册即可): <Route path="/demo/test”component={Test}/>按收参数: this.props.location.search
2.search参数
备注: 获取到的search是urlencoded编码字符串，需要借助querystring解析3.state参数
路由链接(携带参数):<Link to=[(path:'/demo/test',state:(name;'tom',age:18)}}>详情</Link>注册路由(无需声明，正常注册即可):<Route path="/demo/test”component={Test}/>庆收参数: this.props.location,state
备注: 刷新也可以保留住参数

## BrowserRouter与HashRouter的区别
1.底层原理不一样:
BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
HashRouter使用的是URL的哈希值。
2.ur1表现形式不一样BrowserRouter的路径中没有#,例如: localhost;39/demo/testHashRouter的路径包含#,例如: localhost:3909/#/demo/test3.刷新后对路由state参数的影响
(1).BrowserRouter没有任何影响，因为state保存在history对象中。
(2).HashRouter刷新后会导致路由state参数的丢失。
4。备注: HashRouter可以用于解决一此路径错误相关的问题。

## 求和案例 redux精简版
(1)。去除Count组件自身的状态
(2).src下建立:
-src
-redux
-store.js
-count reducer.js
(3).store.js:
1).引入redux中的createstore函数，创建一个store2).createstore调用时要传入一个为其服务的reducer3)。记得暴露store对象
(4).count reducer.js:
1).reducer的本质是一个函数，接收: prestate,action，返回加工后的状态2).reducer有两个作用: 初始化状态，加工状态
3).reducer被第一次调用时，是store自动他发的，传递的prestate是undefined
(5).在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>备注: redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

## react-redux模型图
1.所有的UI组件都应该包裹一个容器组件，他们是父子关系。
2.容器组件是真正和redux打交道的，里面可以随意的使用redux的api。
3.UI组件中不能使用任何redux的api。
4.容器组件会传给UI组件:
(1)redux中所保存的状态。
 (2).用于操作状态的方法
 5.备注:容器给UI传递:状态、操作状态的方法，均通过props传递。

 ## 求和案例 react-redux基本使用
(1).明确两个概念:
1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
2).容器组件:负责和redux通信，将结果交给UI组件。
(2).如何创建一个容器组件-华react-redux 的 connect函数connect(mapStateToprops,mapDispatchToprops)(UI组件)-mapstateToProps:映射状态，返回值是一个对象-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
3).备注: 容器组件中的store是靠props传进去的，而不是在容器组件中直接引入