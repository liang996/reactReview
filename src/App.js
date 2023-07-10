// import Weather from './components/Weather/Weather';
// import Jokes from './components/Jokes';
// import Login from './pages/Login/Login';
import {routes} from "./router/index";
import {RouterView} from "./router/routerView";
import { BrowserRouter  as Router  } from "react-router-dom";
// import { HashRouter as Router  } from "react-router-dom";


import "./App.css";

export default function App() {
  return (
    
    <div className="box">
      <Router>
      <RouterView routes={routes} />
      </Router>
    </div>
    // <div className="box">
    //   <Login/>
    //  {/* <Weather/>
    //  <Jokes/> */}
    // </div>
  );
}
