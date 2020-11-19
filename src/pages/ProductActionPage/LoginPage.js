import { Component } from "react";
import {Redirect} from 'react-router-dom'
import * as Actions from './../../actions/index'
import {connect} from 'react-redux'
class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state  = {
            id:'',
            txtUserName: '',
            txtPassword:'',
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
                return <Redirect to='/'/>
            }
        }
        return (  
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                    <legend>Login</legend>
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
