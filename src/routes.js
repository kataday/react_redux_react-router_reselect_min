import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home1 from './containers/Home1';
import Home2 from './containers/Home2';


export default (
	<Route path="/" component={App}>
    { /* サイトTOP */ }
    <IndexRoute component={Home1}/>

		<Route path="/home1" component={Home1}/>
    <Route path="/home2" component={Home2}/>
  </Route>
);
