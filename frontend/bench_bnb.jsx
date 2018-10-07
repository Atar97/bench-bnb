import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/app';
import {login, logout, signUp} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  // Begin Testing
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = login;
  window.austin = {user: {email: 'austin', password: 'password'}};
  window.bad = {user: {email: 'austin', password: 'passwsdford'}};
  // End Testing

  ReactDOM.render(
    <Root store={store} />,
      rootEl
  );

});
