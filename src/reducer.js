/**
 * Created by Nikhil on 22/02/2016.
 */

import React from "react"
import { ADD_TEXT , MATH_ACTION } from "./Comp"

let text =  (state='', action) => {
  switch (action.type) {
    case ADD_TEXT:
        return action.text;
    case  MATH_ACTION.MULTIPLICATION:
        return (action.num1 * action.num2 );
    case  MATH_ACTION.ADDITION:
      return (Number(action.num1) + Number(action.num2) );
    case  MATH_ACTION.SUBTRACTION:
      return (action.num1 - action.num2 );
    case  MATH_ACTION.DIVIDE:
      return (action.num1 / action.num2 );
    default :
      return state;
  }
}

let values =(state={},action)=>{

  switch(action.type){
    case MATH_ACTION.ALL_FUNC:{
      let newState = {};
      action.type=MATH_ACTION.ADDITION;

      newState = Object.assign({}, newState, { sumtext: text(state.sumtext,action) });
      //state.sumtext =text(state.sumtext,action);
      action.type=MATH_ACTION.SUBTRACTION;
      newState = Object.assign({}, newState, { subtext: text(state.subtext,action) });
      //state.subtext =text(state.subtext,action);
      action.type=MATH_ACTION.MULTIPLICATION;
      newState = Object.assign({}, newState, { multext: text(state.multext,action) });
      state.multext =text(state.multext,action);
      action.type=MATH_ACTION.DIVIDE;
      newState = Object.assign({}, newState, { divtext: text(state.divtext,action) });
      //state.divtext =text(state.divtext,action);
      console.log(state);
      return newState;
    }
    default  : return state;
  }
}

export { text , values  };


