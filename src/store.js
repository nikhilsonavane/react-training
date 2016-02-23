/**
 * Created by Nikhil on 22/02/2016.
 */
import React from "react"
import { createStore, combineReducers ,applyMiddleware  } from 'redux';
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk"
import  { text , values  }  from "./reducer"

let logger=createLogger();

var finalReducer = combineReducers({ text, values});
let midware=applyMiddleware(thunkMiddleware,logger);
let store = createStore(finalReducer,midware);
export default  store;

