import React, { Component } from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from 'redux';
import { Provider } from "react-redux";
import counter from "./reducer";
import App from "./App";
import "./index.css";
import { createRoot } from 'react-dom/client';
 
const container = document.querySelector("#container");
const root = createRoot(container);
 
// Store
var store = createStore(counter);
 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);