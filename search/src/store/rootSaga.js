import SearchSaga from '../redux/SearchSaga.js';
import { fork, all } from 'redux-saga/effects';

function* RootSaga(){
    yield all( effects: [
        fork(SearchSaga)
    ])
}

export default RootSaga;