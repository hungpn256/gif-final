import { Component } from "react";
import {Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'

const menus = [
  // {
  //   name : 'Trang chủ',
  //   to:'/',
  //   exact: true,
  // },
  {
    name:'Bộ sưu tập',
    to : '/product-collection',
    exact: false,
    className:'',
    visitable:true
  },
  {
    name:'Đăng nhập',
    to : '/login',
    exact: false,
    className:'',
    visitable:true
  },
  {
    name:'Đăng ký',
    to : '/register',
    exact: false,
    className:'',
    visitable:true
  },
  {
    name:'Log out',
    to : '/logout',
    exact: false,
    className:'',
    visitable:false
  }
]
var onLogout =()=>{
  localStorage.removeItem('user');
  window.location.reload();
}
const MenuLink =({label,to,activeOnlyWhenExact,className}) =>{
  if(label === 'Log out'){
    return (
      <button type="button" className="btn btn-menu" onClick={onLogout}>Logout</button>
    );
  }
  return(
    <Route 
      path = {to}
      exact={activeOnlyWhenExact}
      children = {({match})=>{
        var active = match ? 'active' : '';
        return(
          <li>
            <Link to = {to} className={`${active} ${className}`}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}
class Menu extends Component {
    showMenu = (menus) =>{
      var {user} = this.props;
      if(user && menus.length === 4){
        menus.push({
          name:user.user.username,
          to : '/xyz',
          exact: true,
          className:'user',
          visitable:true
        })
        menus[3].visitable = true;
        menus[2].visitable = false;
        menus[1].visitable = false;
      }
      var visitLink = menus.filter((menu)=>{
        return menu.visitable === true
      })
      var result = null;
      if(menus.length>0){
        result = visitLink.map((menu,index)=>{
          return(
            <MenuLink 
              key ={index}
              label = {menu.name}
              to = {menu.to}
              activeOnlyWhenExact = {menu.exact}
              className={menu.className}
            />
          )
        })
        return result;
      }
    }
    render(){
        return (
            <div className="navbar navbar-default">
              <div className="menu-nav">
                <Link 
                  className="navbar-brand ml-20" 
                  to = '/'
                  exact
                  >GYPHY</Link>
                  <ul className="nav navbar-nav navbar-right">
                    {this.showMenu(menus)}
                  </ul>
              </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
  return {
    user:state.user
  }
}

export default connect(mapStateToProps,null)(Menu);
