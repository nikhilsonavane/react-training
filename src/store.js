/**
 * Created by Nikhil on 22/02/2016.
 */
import React from "react"
import { createStore, combineReducers } from 'redux';
import text from "./reducer"

var cr = combineReducers({text:text});
let store = createStore(cr);
export default  store;

