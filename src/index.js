import React from "react";
import { createRoot } from 'react-dom/client';
import "./style/index.css";
import App from "./App";
import Session from "./components/session/session";
import Indywidualna from "./components/offers/subOffers/indywidualna";
import Narzeczenska from "./components/offers/subOffers/narzeczenska";
import Slubna from "./components/offers/subOffers/slubna";
import Reportaz from "./components/offers/subOffers/reportaz";
import FontStyles from "./fonts/fontStyles";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import navigationReducer from "./redux/reducers/navigationReducer";
import contactReducer from "./redux/reducers/contactReducer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootReducer = combineReducers({
  nav: navigationReducer,
  contact: contactReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FontStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/session" element={<Session />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route path="/indywidualna" element={<Indywidualna />} />
          <Route path="/narzeczenska" element={<Narzeczenska />} />
          <Route path="/slubna" element={<Slubna />} />
          <Route path="/reportaz" element={<Reportaz />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
