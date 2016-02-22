/**
 * Created by Nikhil on 22/02/2016.
 */

import React from "react"
import { ADD_TEXT , MULTIPLICATION } from "./Comp"

export default  (state='', action='') => {
  switch (action.type) {
    case ADD_TEXT:
        return action.text;
    case MULTIPLICATION:
        return (action.num1 * action.num2 );

    default :
      return state;
  }

}


