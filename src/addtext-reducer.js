import { ADD_TEXT } from './Todo';

export default (state='', action) => {

  switch (action.type) {
    case ADD_TEXT:
      return action.text;
    default :
      return state;
  }
};