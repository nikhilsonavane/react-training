/**
 * Created by Nikhil on 15/02/2016.
 */
import { createStore, combineReducers } from 'redux';

import text from './addtext-reducer';

let finalReducer = combineReducers({ text: text });
console.log(finalReducer);
export const store = createStore(finalReducer);