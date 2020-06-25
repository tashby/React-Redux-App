import types from './types.js';
import { takeLatest, put } from 'redux-saga/effects';
import { setSearchResult } from './action.js';
import axios from 'axios';


function* setSearch({ value }) {
    try {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=I6I9lmGDLRxTDdmOKpzclM62USF6Sa7i=${ value }?limit=20`;
    const data = yield axios.get(url);
    return yield put(setSearchResult(data.data.data));
    } catch (e) {
        console.log(e)
    }
}

function* watchSearch() {
    yield takeLatest(types.watchGetSearchResults, setSearch);
}

export default watchSearch;