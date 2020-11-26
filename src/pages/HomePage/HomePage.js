import { Component } from "react";
import ProductList from './../../components/productList/ProductList'
import {connect} from 'react-redux'
import * as Actions from './../../actions/index'
class HomePage extends Component {
    componentDidMount(){
        let {user,fetchOnFavoriteProducts} = this.props;
        if(user !== null && user !== false) {
            fetchOnFavoriteProducts({token:user.token});
        }
    }
    render(){
        return (
            <div className = 'home-page'>
                <h1>Trang chủ </h1>
                <ProductList action = "add"/>
            </div>
        );
    }
}
const mapStateToProps= state=>{
    return{
        user :state.user
    }
}
const mapDispatchToProps = (dispatch,action)=>{
    return{
        fetchOnFavoriteProducts : (token) =>{
            dispatch(Actions.onFetchFavoriteRequest(token))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
