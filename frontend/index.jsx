import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

//testing
import {login, logout} from './actions/session_actions';
//end


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  //temporary for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end

  ReactDOM.render(<Root store={store} />, root);
});