import React from 'react';
import Search from './components/Search.js';
import { Provider } from 'react-redux';
import store from './store/createStore';
import Results from './components/Results/index.js';

function App() {
  return (
    <>
    <Provider store={ store }>
      <Search />
      <Results />
    </Provider>
    </>
  )
}

export default App;
