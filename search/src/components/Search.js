import React from 'react';
import axios from 'axios';

function Search() {
    return (
        <>
            <input onChange={ onInputChange }/>
        </>
    )
}

async function onInputChange(e) {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=I6I9lmGDLRxTDdmOKpzclM62USF6Sa7i=${ e.target.value }?limit=20`;
    const data = await axios.get(url);
    console.log(data.data.data);
}

// function callApi(value){
//     //api.giphy.com/v1/gifs/search?api_key=I6I9lmGDLRxTDdmOKpzclM62USF6Sa7i=pets?limit=20
    
// }

export default Search;