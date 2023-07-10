import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 

// import qs from "querystring";
//withRouter可以使一般组件赋予路由组件所特有的功能 ，withRouter的返回值是一个新组件
class My extends Component {
  //回退
  back = () => {
    console.log(" this.props.location :>> ", this.props);
    this.props.history.goBack()

  };
   //前进
  forWord = () => {
    console.log(" this.props.location :>> ", this.props);
    this.props.history.goForward()

  };
     //后退

  go = () => {
    console.log(" this.props.location :>> ", this.props);
    this.props.history.go(-1)

  };
  render() {
    //接受search参数

    console.log(" this.props.location :>> ", this.props);
    //   let {userName,password}=qs.parse(this.props.location.search.slice(1)) // //HashRouter和HashRouter两种模式下，页面刷新，数据都不会丢失
    //  console.log('userName :>> ', userName);
    //  console.log('password :>> ', password);
    //接受query参数
    // let {userName,password}=this?.props?.location?.query //HashRouter和HashRouter两种模式下，页面刷新，数据都会丢失
    //   console.log('userName :>> ', userName);
    //    console.log('password :>> ', password);
        //接受state参数
    let {userName,password}=this?.props?.location?.state // HashRouter模式下，页面刷新，数据会丢失
      console.log('userName :>> ', userName);
       console.log('password :>> ', password);
    return (
      <div>
         <div className="content">
          <button onClick={this.back}>回退</button>
          <button onClick={this.forWord}>前进</button>
          <button onClick={this.go}>go</button>

         </div>
        <div className="content">
          接受姓名数据为：{userName}<br/>
          接受密码数据为：{password}

        </div>
      </div>
    );
  }
}
export default withRouter(My) 