import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import "./index.css";
import App from "./App";
import rootReducers from './reducers/index'
import reportWebVitals from "./reportWebVitals";


const store = createStore(rootReducers,composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
