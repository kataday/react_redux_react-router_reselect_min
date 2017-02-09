import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

export default function createStore(browserHistory) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(browserHistory);
	const middlweare = [
		reduxRouterMiddleware
	]

  const reducers = require('./reducer');

	let createStoreWithMiddlware = applyMiddleware(...middlweare)(_createStore);
	const store = createStoreWithMiddlware(reducers);

  return store;
}
