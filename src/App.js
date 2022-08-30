import React from "react";
import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Addorder from "./components/Addorder";
import { BrowserRouter as Routers, Route, Switch} from "react-router-dom";
import Vieworder from "./components/Vieworder";
import Addcustomer from "./components/Addcustomer";
import Addstaff from "./components/Addstaff";
import Salaries from "./Salaries";
import Adddesignation from "./components/Adddesignation";
import Aexpense from "./components/Aexpense";
import Aecategory from "./components/Aecategory";


function App() {
  return (
    <Routers>
         <div className="main">
      <Sidebar />
      <div className="container">
        <Switch>
          <Route exact path="/">
          <Dashboard />
          </Route>
          <Route path="/Addorder">
          <Addorder />
          </Route>
          <Route path="/Vieworder">
          <Vieworder />
          </Route>
          <Route path="/Addcustomer">
          <Addcustomer />
          </Route>
          <Route path="/Addstaff">
          <Addstaff />
          </Route>
          <Route path="/Salaries">
          <Salaries />
          </Route>
          <Route path="/Adesignation">
          <Adddesignation />
          </Route>
          <Route path="/Aexpense">
          <Aexpense />
          </Route>
          <Route path="/Aecategory">
          <Aecategory />
          </Route>
      </Switch>
      
    </div>
    </div>
    </Routers>
 
  );
}

export default App;
