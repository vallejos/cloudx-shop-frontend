import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    console.log(error)
    switch (error?.response?.status) {
      case 401:
        alert(`Authorization Failed: ${error?.response?.status} ${error?.response?.statusText}`)
        return Promise.reject(error?.response ?? error)

      case 403:
        alert(`Access Denied: ${error?.response.status} ${error?.response?.statusText}`)
        return Promise.reject(error?.response ?? error)  

      case 400:
      case 500:
        alert(`${error?.response?.status} ${error?.response?.statusText}`)
        return Promise.reject(error?.response ?? error)

      default:
        console.log('Error: ', error)
    }
  }

);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
