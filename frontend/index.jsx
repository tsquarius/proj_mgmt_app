import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faSearch, faSpinner, faBars } from '@fortawesome/free-solid-svg-icons';
import { faComment, faEdit, faTrashAlt, faSave } from '@fortawesome/free-regular-svg-icons';

library.add(faEdit, faComment, faTrashAlt, faCircle, faSave, faSearch, faSpinner, faBars);

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

  ReactDOM.render(<Root store={store} />, root);
});