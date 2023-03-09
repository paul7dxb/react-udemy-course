import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import configureStore from "./hooks-store/products-store";
// Call configure store for each store "part" of the application
configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
