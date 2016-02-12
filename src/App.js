/**
 * Created by Nikhil on 10/02/2016.
 */
import React from "react";
import { Link } from "react-router";

import Def from "./def";
import Home from "./Home";

export default ({children}) => {
  console.log(children);
  return (<div>
    <ul>
      <li><Link to={"/"}>Default</Link></li>
      <li><Link to={"/home"}>Home</Link></li>
    </ul>
    <div>
      {children}
    </div>
  </div>);

};

