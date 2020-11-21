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
            console.log(res);
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
// export const onLogout=()=>{
//     return{
//         type:Types.LOGOUT
//     }
// }
export const onPushLikeListRequest=(url)=>{
    return (dispatch)=>{
        return callApi('users/user','PUT',url)
        .then(res=>{
            dispatch(onPushLikeListSuccess(url))
        })
        .catch(err=>{
            dispatch(onPushLikeListFalse(false))
        })
    }
}
export const onPushLikeListSuccess=(payload)=>{
    return{
        type:Types.PUSH_GIF_ITEM_SUCCESS,
        payload
    }
}
export const onPushLikeListFalse=(payload)=>{
    return{
        type:Types.PUSH_GIF_ITEM_FAIL,
        payload
    }
}