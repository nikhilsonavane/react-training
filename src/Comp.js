/**
 * Created by Nikhil on 22/02/2016.
 */
import React from "react";
import { connect } from "react-redux"

export const ADD_TEXT = "ADD_TEXT";

const Comp = ({text,addText}) => {
  let inp;
  return (
      <div>
        <input type="text" ref={(node)=>{inp=node}}/>
        <input type="button" onClick={()=> { addText(inp.value); }} value="Set Text"/><br/>
        <input type="text" value={text}/>
      </div>
  );
}

var mapStattoProps = (state) => {
  return {
    text: state.text
  };
};

var mapDispatchtoProp = (dispatch)=> {
  return {
    addText: (text)=> {
      dispatch({text: text, type: ADD_TEXT})
    }
  };
}

let CompoItem = connect(mapStattoProps, mapDispatchtoProp)(Comp);
export default CompoItem;


