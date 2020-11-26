import * as Types from '../constants/ActionTypes'


const favorite = (state = [],action)=>{
    switch (action.type){
        case Types.FETCH_FAVORITE_SUCCESS:
            state=action.payload
            return state
        case Types.DELETE_FAVORITE_SUCCESS:
            state = action.payload
            console.log(state)
            return state
        case Types.FETCH_FAVORITE_FAIL:
            state = []
            return state;
        default : return state;
    }
}
export default favorite;