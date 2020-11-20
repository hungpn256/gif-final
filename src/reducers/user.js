import * as Types from '../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('user'));
var initalState = data?data:null

const user = (state = initalState,action)=>{
    switch (action.type){
        case Types.LOGIN_SUCCESS:
            state=action.payload
            return state
        case Types.LOGIN_FAIL:
            state = action.payload
            return state;
        // case Types.LOGOUT:
        //     state=null
        //     return state
        default : return state;
    }
}
export default user;