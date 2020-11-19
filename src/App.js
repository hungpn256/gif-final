import { Component } from 'react';
import Menu from './components/menu/menu'
import './App.css';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import routes from './router'
class App extends Component {
  render(){
    return (
      <Router>
        <Menu/>
        <div class="container">
            {this.showContentMenus(routes)}
          </div>
      </Router>
    );
  }
  showContentMenus = (routes)=>{
    var result = null;
    if(routes.length>0){
      result = routes.map((route,index)=>{
        return <Route 
          key = {index}
          path = {route.path}
          exact= {route.exact}
          component = {route.main}
        />
      })
    }
    return <Switch>
      {result}
    </Switch>;
  }
}

export default App;
