import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './App';
import store, { StoreContext } from './stores';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <AppWrapper />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
