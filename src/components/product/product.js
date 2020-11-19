import {Component} from 'react'
class Product extends Component{
  render(){
    var {url} = this.props;
    return(
        <article className="product col-lg-3 col-md-6 mb-r">
            <div className=" card text-center card-cascade product-card">
                <div className="card-body">
                    <img src={url}
                        className="img-fluid product-img img-thumbnail" alt="" />
                </div>
                <div className="card-footer">                
                    <button type="button" className="btn btn-success like-button">
                        <span>
                        <i class="far fa-heart"></i>
                        </span>
                    </button>
                </div>
            </div>
        </article>      
    );
  }
}
export default Product
