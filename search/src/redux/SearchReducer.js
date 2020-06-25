import types from './types.js'
import { Map, fromJS } from 'immutable';

const initialState = Map({
    searchResults: []
});

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.setSearchResults: {
            return state.merge( collections: {
                searchResults: fromJS(action.results)
            });
        }
        default: {
            return state;
        }
    }
};

export default SearchReducer;