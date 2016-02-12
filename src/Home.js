/**
 * Created by Nikhil on 10/02/2016.
 */

import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router"
import PG1 from "./PG1"
import PG2 from "./PG2"
import DefaultPage from "./def"

var Home = ({ children })=> {
  if(children === null) {
    let pg1 = PG1();
    children = pg1;
  }
  console.log(children);
  return (
    <div>
      <ul>
        <li><Link to={"/"}> Default </Link></li>
        <li><Link to={"/home/pg1"}> PG1 </Link></li>
        <li><Link to={"/home/pg2"}> PG2 </Link></li>
      </ul>
      <div>
        {children}
      </div>
    </div>);

};

export default Home;
