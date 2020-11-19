import {combineReducers} from 'redux'
import user from './user'
import register from './register'
const appReducer = combineReducers({
    user,
    register
})
export default appReducer;