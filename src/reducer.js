/**
 * Created by Nikhil on 22/02/2016.
 */

import React from "react"
import { ADD_TEXT , MATH_ACTION } from "./Comp"

export default  (state='', action='') => {
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


