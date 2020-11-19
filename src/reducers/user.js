import * as Types from '../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('user'));
var initalState = data?data:null

const user = (state = initalState,action)=>{
    switch (action.type){
        case Types.LOGIN:
            state=action.payload
            return state
        default : return state;
    }
}
export default user;