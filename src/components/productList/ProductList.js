import {Component} from 'react'
import Product from './../product/product'
import {callApiGiphy} from './../../utils/apiCaller'
class ProductList extends Component{
  constructor(props){
    super(props);
    this.state={
      products:[]
    }
  }
  componentDidMount(){
    callApiGiphy().then(res=>{
      this.setState({
        products:res.data.data
      })
    })
  }
  showProduct=(products)=>{
    var result=null;
    if(products.length > 0){
      result = products.map((product,index)=>{
        return <Product 
          key={index}
          url = {product.images.downsized_medium.url}
          index={index}
        />
      })
    }
    return result;
  }
  render(){
    var {products} =this.state;
    return (
        this.showProduct(products)  
    );
  }
}
export default ProductList
