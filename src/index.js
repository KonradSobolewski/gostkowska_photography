import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import navigationReducer from './redux/reducers/navigationReducer';

const rootReducer = combineReducers({
  nav: navigationReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
