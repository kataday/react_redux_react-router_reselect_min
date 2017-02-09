import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import action1 from './action1';
import action2 from './action2';

export default combineReducers({
  routing: routerReducer,
	action1,
	action2
});