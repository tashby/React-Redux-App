import types from './types.js';
import { takeLatest, put, call } from 'redux-saga/effects';

function* setSearch() {
    try {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=I6I9lmGDLRxTDdmOKpzclM62USF6Sa7i=${ e.target.value }?limit=20`;
    const data = yield axios.get(url);
    console.log(data.data.data);
    } catch (e) {
        console.log(e)
    }
}

function* watchSearch() {
    yield takeLatest(types.watchGetSearchResults, setSearch);
}

export default watchSearch;