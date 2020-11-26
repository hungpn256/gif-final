import * as Types from './../constants/ActionTypes'
import {callApi} from './../utils/apiCaller'
export const onLoginRequest = (user) =>{
    return (dispatch) =>{
        return callApi('users/login','POST',user)
        .then(res=>{
            localStorage.setItem('user',JSON.stringify(res.data))
            dispatch(onLoginSuccess(res.data))
        })
        .catch(err=>{
            dispatch(onLoginFail(false))
        })
    }
} 
export const onLoginSuccess=(payload)=>{
    return {
        type: Types.LOGIN_SUCCESS,
        payload
    }
}
export const onLoginFail=(payload)=>{
    return {
        type: Types.LOGIN_FAIL,
        payload
    }
}
export const onRegisterRequest=(user)=>{
    return (dispatch)=>{
        return callApi('users/register','POST',user)
        .then(res=>{
            dispatch(onRegisterSuccess(res.data))
        })
        .catch(err=>{
            dispatch(onRegisterFail(false))
        })
    }
}
export const onRegisterSuccess=(payload)=>{
    return{
        type:Types.REGISTER_SUCCESS,
        payload
    }
}
export const onRegisterFail=(payload)=>{
    return{
        type:Types.REGISTER_FAIL,
        payload
    }
}
export const onRegisterReset=(payload)=>{
    return{
        type:Types.REGISTER_RESET,
        payload
    }
}
export const onPushLikeListRequest=(url)=>{
    return (dispatch)=>{
        return callApi('users/user/add','POST',url)
        .then(res=>{
            dispatch(onPushLikeListSuccess(res.data))
        })
        .catch(err=>{
            dispatch(onPushLikeListFail(false))
        })
    }
}
export const onPushLikeListSuccess=(payload)=>{
    return{
        type:Types.PUSH_GIF_ITEM_SUCCESS,
        payload
    }
}
export const onPushLikeListFail=(payload)=>{
    return{
        type:Types.PUSH_GIF_ITEM_FAIL,
        payload
    }
}

export const onDeleteLikeListRequest=(url)=>{
    return (dispatch)=>{
        return callApi('users/user/delete','POST',url)
        .then(res=>{
            dispatch(onDeleteLikeListSuccess(res.data))
        })
        .catch(err=>{
            dispatch(onDeleteLikeListFail(false))
        })
    }
}
export const onDeleteLikeListSuccess=(payload)=>{
    return{
        type:Types.DELETE_FAVORITE_SUCCESS,
        payload
    }
}
export const onDeleteLikeListFail=(payload)=>{
    return{
        type:Types.DELETE_FAVORITE_FAIL,
        payload
    }
}
export const onFetchFavoriteRequest=(token)=>{
    return (dispatch)=>{
        return callApi('users/user','POST',token)
        .then(res=>{
            dispatch(onFetchFavoriteSuccess(res.data))
        })
        .catch(err=>{
            dispatch(onFetchFavoriteFail(false))
        })
    }
}
export const onFetchFavoriteSuccess=(payload)=>{
    return{
        type:Types.FETCH_FAVORITE_SUCCESS,
        payload
    }
}
export const onFetchFavoriteFail=(payload)=>{
    return{
        type:Types.FETCH_FAVORITE_FAIL,
        payload
    }
}