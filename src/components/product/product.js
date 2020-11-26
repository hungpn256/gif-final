import { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";
import * as Actions from "./../../actions/index";
class Product extends Component {
  onPushLikeList = (url) => {
    let {user} = this.props;
    this.props.onPushLikeList({
      token: user.token,
      favorite: url
    });
  };
  onDeleteLikeList=(url)=>{
    let {user} = this.props;
    this.props.onDeleteLikeList({
      token: user.token,
      favorite: url
    })
  }
  showButton(url){
    let {action} = this.props;
    if(action==="add"){
      return (<button
      type="button"
      className="btn btn-warning like-button btn-lg"
      onClick={() => this.onPushLikeList(url)}
    >
      <FavoriteIcon 
        fontSize="large"
        className="favoriteIcon"
        style={{ color: "red" }}
      />
    </button>)
    }
    else return(<button
      type="button"
      className="btn btn-warning dislike-button btn-lg"
      onClick={() => this.onDeleteLikeList(url)}
    >
      <ClearIcon fontSize="large" />
    </button>)
  }
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
            {this.showButton(url)}
          </div>
        </div>
      </article>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user:state.user
  };
};
const mapDispatchToProps = (dispatch, action) => {
  return {
    onPushLikeList: (url) => {
      dispatch(Actions.onPushLikeListRequest(url));
    },
    onDeleteLikeList:(url)=>{
      dispatch(Actions.onDeleteLikeListRequest(url))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
