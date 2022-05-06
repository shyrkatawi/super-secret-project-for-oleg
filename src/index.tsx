import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { setUsers } from './redux/slices/storeSlice';
import {TUser} from "./components/Users/componets/User/types";

fetch('http://localhost:3000/users.json')
  .then((response) => response.json())
  .then((json) => {
    const users: TUser[] = json.users as TUser[];
    store.dispatch(setUsers(users));
  });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>
);
