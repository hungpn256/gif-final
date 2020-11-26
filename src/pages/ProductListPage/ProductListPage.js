import { Component } from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Product from './../../components/product/product'
import * as Actions from './../../actions/index'
class ProductListPage extends Component {
    componentDidMount(){
        let {user,fetchOnFavoriteProducts} = this.props;
        if(user) {
            fetchOnFavoriteProducts({token:user.token});
        }
    }
    showProductFavorite=(urls)=>{
        var result = null;
        if(urls && urls.length > 0){
            result = urls.map((url,key)=>{
                return <Product key = {key} url = {url} action = "sub" />
            })
        }
        else result = <h2>Bộ sưu tập trống</h2>
        return result;
    }
    render(){
        let {user,favorite} = this.props;
        if(!user){
            return <Redirect to ='/gif-final/login'/>
        }
        return (
            <div>
                <h1>
                    Bộ Sưu Tập
                </h1>
                {this.showProductFavorite(favorite.favorites)}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        user :state.user,
        favorite: state.favorite
    }
}
const mapDispatchToProps = (dispatch,action)=>{
    return{
        fetchOnFavoriteProducts : (token) =>{
            dispatch(Actions.onFetchFavoriteRequest(token))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
