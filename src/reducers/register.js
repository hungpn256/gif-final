import * as Types from '../constants/ActionTypes'
var initalState = null

const user = (state = initalState,action)=>{
    switch (action.type){
        case Types.REGISTER:
            state=action.payload
            return state
        case Types.REGISTER_RESET:
            state=action.payload;
            return state;
        default : return state;
    }
}
export default user;