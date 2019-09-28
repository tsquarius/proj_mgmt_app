import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

//testing
import {login, logout} from './actions/session_actions';
//end


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { userId: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");

  //temporary for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end

  ReactDOM.render(<Root store={store} />, root);
});