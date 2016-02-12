/**
 * Created by Nikhil on 09/02/2016.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory,IndexRoute,Router,Route }  from "react-router"
import { Link } from "react-router";
import { Provider } from 'react-redux';

import FixedCSS from './css-comp/fixestyle';
import Home from "./Home"
import PG1 from "./PG1"
import PG2 from "./PG2"
import Def from "./def"
import App from "./App"


export default class Index extends React.Component {
  render() {
    return (
      <div>

      </div>

    );
  }
}

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}>
        <IndexRoute component={PG1}/>
      </IndexRoute>
    <Route path="home" component={Home}>
      <Route path="pg1" component={PG1}/>
      <Route path="pg2" component={PG2}/>
    </Route>
  </Route>
</Router>, document.getElementById("app"));




