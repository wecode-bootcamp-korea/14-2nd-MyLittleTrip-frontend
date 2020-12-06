import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./store/reducers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/reset.scss";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById("root")
);
