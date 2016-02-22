/**
 * Created by Nikhil on 22/02/2016.
 */
import React from "react";
import { connect } from "react-redux"

export const ADD_TEXT = "ADD_TEXT";

export const MATH_ACTION = {
    MULTIPLICATION : 'MULTIPLICATION',
    ADDITION: 'ADDITION',
    SUBTRACTION:'SUBTRACTION',
    DIVIDE:'DIVIDE' };

const Comp = ({text,multiplication,addition,subtraction,divide}) => {
  let num1, num2;
  return (
      <div>
        Number 1: <input type="text" ref={(node)=>{num1=node}} width="30"/><br/>
        Number 2: <input type="text" ref={(node)=>{num2=node}} width="30"/><br/>

        <input type="button" onClick={()=> { addition(num1.value,num2.value); }} value="+"/>
        <input type="button" onClick={()=> { subtraction(num1.value,num2.value); }} value="-"/>
        <input type="button" onClick={()=> { multiplication(num1.value,num2.value); }} value="*"/>
        <input type="button" onClick={()=> { divide(num1.value,num2.value); }} value="/"/><br/>

        <input type="text" value={text}/>

      </div>
  );
}

var mapStattoProps = (state) => {
  return {
    text: state.text
  };
};
//dispacth create Action
var mapDispatchtoProp = (dispatch)=> {
  return {
    multiplication: (num1, num2)=> {
      dispatch({type: MATH_ACTION.MULTIPLICATION, num1, num2})
    },
    addition: (num1,num2) =>{
      dispatch({type: MATH_ACTION.ADDITION, num1, num2})
    },
    subtraction: (num1,num2) =>{
      dispatch({type: MATH_ACTION.SUBTRACTION, num1, num2})
    },
    divide: (num1,num2) =>{
      dispatch({type: MATH_ACTION.DIVIDE, num1, num2})
    }
  };
}

let CompoItem = connect(mapStattoProps, mapDispatchtoProp)(Comp);
export default CompoItem;


