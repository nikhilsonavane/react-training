/**
 * Created by Nikhil on 09/02/2016.
 */
import ReactDOM from "react-dom"
import React from "react";
import Todo from './Todo';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(<Provider store={store}><Todo /></Provider>, document.getElementById("app"));
