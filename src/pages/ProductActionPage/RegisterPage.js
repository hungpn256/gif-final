import { Component } from "react";
import * as Actions from './../../actions/index'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state  = {
            id:'',
            txtUserName: '',
            txtPassword:'',
            txtRePassword:'',
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
        var {txtUserName,txtPassword,txtRePassword} = this.state;
        if(txtPassword === txtRePassword) {
            this.props.onRegisterRequest({
                username:txtUserName,
                password:txtPassword,
            })
        }
    }
    render(){
        var {txtUserName,txtPassword,txtRePassword} = this.state;
        var {userRegister} = this.props;
        if(userRegister){
            this.props.onRegisterReset(false);
            return <Redirect to='login' />
        }
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSave}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="text" className="form-control" id="name-register" placeholder="Input field" 
                            name = "txtUserName" 
                            value = {txtUserName}
                            onChange = {this.onChange}
                            required/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="password-register" placeholder="Input field" 
                            name = 'txtPassword' 
                            value = {txtPassword}
                            onChange = {this.onChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label>Re-Password:</label>
                        <input type="password" className="form-control" id="re-password-register" placeholder="Input field" 
                            name = 'txtRePassword' 
                            value = {txtRePassword}
                            onChange = {this.onChange}
                            required
                            />
                    </div>
                    <div className="form-group">
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Đăng ký</button>
                </form>
                
            </div>
            
        );
    }
}
const mapStateToProps= state=>{
    return{
        userRegister : state.register
    }
}
const mapDispatchToProps =(dispatch,action)=>{
    return{
        onRegisterRequest:(user)=>{
            dispatch(Actions.onRegisterRequest(user))
        },
        onRegisterReset:(payload)=>{
            dispatch(Actions.onRegisterReset(payload))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);