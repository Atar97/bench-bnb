import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchParks, createPark} from './actions/park_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  const rootEl = document.getElementById('root');
  let store;
  if (window.currentUser.id) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore({});
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  //start testing
  window.fetchParks = fetchParks;
  window.createPark = createPark;
  //end testing
  ReactDOM.render(
    <Root store={store} />,
      rootEl
  );

});
