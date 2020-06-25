import { combineReducers } from 'redux';
import SearchReducer from '../redux/SearchReducer.js'

export default combineReducers( reducers: {
    search: SearchReducer
});