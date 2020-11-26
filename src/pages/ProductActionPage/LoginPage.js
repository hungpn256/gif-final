import { Component } from "react";
import {Redirect, Prompt} from 'react-router-dom'
import * as Actions from './../../actions/index'
import {connect} from 'react-redux'
class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state  = {
            id:'',
            txtUserName: '',
            txtPassword:'',
            loginStatus:'',
            prompt: true
        }
    }
    onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSave=(e)=>{
        e.preventDefault();
        var {txtUserName,txtPassword} = this.state;
        this.props.onRequest({
            username:txtUserName,
            password:txtPassword
        })
    }
    render(){
        var {txtUserName,txtPassword} = this.state;
        var {user} = this.props;
        if(user!==null){
            if(user.isAuthenticated){
                return <Redirect to='/gif-final/'/>
            }
        }
        var x = document.getElementsByClassName('login-status')[0];
        if(x){
            if(user === false)
                x.style.display='block';
            else x.style.display='none'
        }
        return (  
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                    <legend>Login</legend>
                    <label className='login-status'>Login false, please try again</label>
                    <div className="form-group">
                        <label>UserName:</label>
                        <input type="text" className="form-control" id="userName" placeholder="UserName" 
                            name = "txtUserName" 
                            value = {txtUserName}
                            onChange = {this.onChange}
                            required/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" 
                            name = 'txtPassword' 
                            value = {txtPassword}
                            onChange = {this.onChange}
                            required
                            />
                    </div>
                    {/* <div className="checkbox">
                        <label >
                            <input type="checkbox" name='chkbStatus'
                                value = {chkbStatus}
                                onChange = {this.onChange}
                            />
                            Remember me
                        </label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                </form>
                {/* <Prompt when={this.state.prompt} 
                    message = {location=>(`location ${location.pathname}`)}
                /> */}
            </div>
            
        );
    }
}
const mapStateToProps= state=>{
    return{
        user:state.user
    }
}
const mapDispatchToProps =(dispatch,action)=>{
    return{
        onRequest:(user)=>{
            dispatch(Actions.onLoginRequest(user))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
