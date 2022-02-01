import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import Session from "./components/session/session";
import FontStyles from "./fonts/fontStyles";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import navigationReducer from "./redux/reducers/navigationReducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootReducer = combineReducers({
  nav: navigationReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FontStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/session" element={<Session />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
