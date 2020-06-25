import types from './types';

export const getSearchResults = () => ({
    type: types.watchGetSearchResults,
    value
})

export const setSearchResult = results => ({
    type: types.setSearchResults,
    results
});
