/**
 * Created by Nikhil on 12/02/2016.
 */

import React from "react"
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

export const ADD_TEXT = 'ADD_TEXT';

let Todo = ({ text, addText }) => {
  let inp;
  return (<div>
    <input type="text" ref={(node) => { inp = node; }}/>
    <br/>
    <input type="button" onClick={() => {  addText(inp.value); }} value="Add"/>
    <br/>
    <input type="text" value={text} disabled="true"/>
  </div>);
};
let mapStateToProps = (state) => {
  console.log(state);
  return {
    text: state.text
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addText: (text) => {
     dispatch({type: ADD_TEXT, text: text});
    }
  };
};
Todo = connect(mapStateToProps, mapDispatchToProps)(Todo);


export default Todo;