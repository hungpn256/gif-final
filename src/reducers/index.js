import {combineReducers} from 'redux'
import user from './user'
import register from './register'
import favorite from './favorite'
const appReducer = combineReducers({
    user,
    register,
    favorite
})
export default appReducer;