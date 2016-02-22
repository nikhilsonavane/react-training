/**
 * Created by Nikhil on 22/02/2016.
 */
import React from "react";
import { connect } from "react-redux"

export const ADD_TEXT = "ADD_TEXT";
export const MULTIPLICATION="MULTIPLICATION";

const Comp = ({text,multiplication}) => {
  let num1,num2;
  return (
      <div>
        <input type="text" ref={(node)=>{num1=node}} width="30"   /> *
        <input type="text" ref={(node)=>{num2=node}} width="30"  />
        <input type="button" onClick={()=> { multiplication(num1.value,num2.value); }} value="MULTIPLICATION"/><br/>
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
    multiplication: (num1,num2)=> {
      dispatch({ type: MULTIPLICATION , num1,num2})
    }
  };
}

let CompoItem = connect(mapStattoProps, mapDispatchtoProp)(Comp);
export default CompoItem;


