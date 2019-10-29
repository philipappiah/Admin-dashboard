import {combineReducers} from 'redux';
import ordersReducers from './ordersReducers';



export default combineReducers({
    orders:ordersReducers
})