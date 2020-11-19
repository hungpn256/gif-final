import * as Types from './../constants/ActionTypes'
import {callApi} from './../utils/apiCaller'
export const onLoginRequest = (user) =>{
    return (dispatch) =>{
        return callApi('users/login','POST',user)
        .then(res=>{
            console.log(res)
            localStorage.setItem('user',JSON.stringify(res.data))
            dispatch(onLogin(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
} 
export const onLogin=(payload)=>{
    return {
        type: Types.LOGIN,
        payload
    }
}
export const onRegisterRequest=(user)=>{
    return (dispatch)=>{
        return callApi('users/register','POST',user)
        .then(res=>{
            console.log(res);
            dispatch(onRegister(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const onRegister=(payload)=>{
    return{
        type:Types.REGISTER,
        payload
    }
}
export const onRegisterReset=(payload)=>{
    return{
        type:Types.REGISTER_RESET,
        payload
    }
}