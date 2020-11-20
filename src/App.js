import { Component } from "react";
import Menu from "./components/menu/menu";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./router";

import MediaQuery from "react-responsive";

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="container">
          <MediaQuery minDeviceWidth={900} device={{ deviceWidth: 1600 }}>
            {this.showContentMenus(routes)}
          </MediaQuery>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
