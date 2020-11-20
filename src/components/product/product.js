import { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {connect} from 'react-redux'
import * as Actions from './../../actions/index'
class Product extends Component {
  render() {
    var { url } = this.props;
    return (
      <article className="product demo col-3 col-s-6  mb-r mb-10">
        <div className=" card text-center card-cascade product-card ">
          <div className="card-body">
            <img
              src={url}
              className="img-fluid product-img img-thumbnail"
              alt=""
              style={{ width: "100%", height: "350px", objectFit: "contain" }}
            />
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-warning like-button btn-lg"
            >
              {/* <span>
                <i class="far fa-heart"></i>
                
              </span> */}
              <FavoriteIcon
                fontSize="large"
                className="favoriteIcon"
                style={{ color: "red" }}
              />
            </button>
          </div>
        </div>
      </article>
    );
  }
}
const mapStateToProps = (state)=>{
    return{

    }
}
const mapDispatchToProps =(dispatch,action)=>{
    return{
        onPushLikeList:(url)=>{
            dispatch(Actions.onPushLikeListRequest(url))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);
