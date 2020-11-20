import { Component } from "react";
import ProductList from './../../components/productList/ProductList'

class HomePage extends Component {
    render(){
        return (
            <div className = 'home-page'>
                <h1>Trang chủ </h1>
                <ProductList/>

            </div>
        );
    }
}
export default HomePage;
