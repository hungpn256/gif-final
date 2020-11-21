import { Component } from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Product from './../../components/product/product'
class ProductListPage extends Component {
    // componentDidMount(){
    //     this.props.fetchOnProducts();
    // }
    showProductFavorite=(urls)=>{
        var result = null;
        if(urls.length >0){
            result = urls.map((url,key)=>{
                return <Product key = {key} url = {url} />
            })
        }
        else result = <h2>Bộ sưu tập trống</h2>
        return result;
    }
    render(){
        var {user} = this.props;
        console.log(user)
        if(user === null || typeof user !== 'object'){
            return <Redirect to ='/login'/>
        }
        return (
            <div>
                <h1>
                    Bộ Sưu Tập
                </h1>
                {this.showProductFavorite(user.user.favorites)}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        user :state.user
    }
}
// const mapDispatchToProps = (dispatch,action)=>{
//     return{
//         fetchOnProducts : () =>{
//             dispatch(actFetchProductsRequest())
//         }
//     }
// }
export default connect(mapStateToProps,null)(ProductListPage);
