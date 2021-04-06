
import { combineReducers } from 'redux'
import products from './products'
import user from './users'

const reducer = combineReducers({
    products , 
    user
})

export default reducer