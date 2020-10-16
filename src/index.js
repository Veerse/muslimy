import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {fetchPodcasts} from "./features/podcasts/PodcastsSlice";

store.dispatch(fetchPodcasts())

var jwt_expire = localStorage.getItem('jwt_expire')
var jwt = localStorage.getItem('jwt')

if (Date.parse(jwt_expire) > Date.parse(new Date())) {
  console.log('JWT not expired (will expire ' + jwt_expire + '). Fetch user here')
  console.log('Dispatching a login action with jwt ' + jwt)
} else {
  localStorage.clear()
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
