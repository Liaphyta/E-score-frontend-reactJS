import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {mainReducer} from './shared/reducers/MainReducer';
import axios from 'axios';


function getCurrentAccessToken(){
  var idm = JSON.parse(localStorage.getItem('idm'));
  if (idm != null) {
      return idm.access_token;
  }
  dispatchAction({type: "USER_LOGOUT", payload: undefined});
  return null;
}

const appReducer = combineReducers({
    mainReducer,
  });
  
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    dispatchAction({ type: 'SHOW_LOADING' });
    console.log(config.url);
    if(!(config.url.includes('upcomingMatches')||config.url.includes('tournaments')||config.url.includes('previousMatches')||config.url.includes('teams')||config.url.includes('create')))
    if(!config.url.includes('access_token='))
    if(config.url.includes('&')||config.url.includes('?'))
    config.url = config.url + '&access_token=' + getCurrentAccessToken();
    else
    config.url = config.url + '?access_token=' + getCurrentAccessToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
  }
  
  const store = createStore(
    rootReducer
  );

  export function dispatchAction(action) {
    store.dispatch(action);
  }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
