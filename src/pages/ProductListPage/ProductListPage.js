import { Component } from "react";
import {connect} from 'react-redux'
class ProductListPage extends Component {
    // componentDidMount(){
    //     this.props.fetchOnProducts();
    // }
    render(){
        // var {products} = this.props;
        return (
            <div>
                list
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
