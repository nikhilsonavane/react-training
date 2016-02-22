/**
 * Created by Nikhil on 09/02/2016.
 */
import ReactDOM from "react-dom"
import React from "react"

import store from "./store"
import { Provider } from "react-redux";
import CompoItem from "./Comp"

ReactDOM.render(  <Provider store={store}><CompoItem /></Provider>    ,document.getElementById("app")  );

