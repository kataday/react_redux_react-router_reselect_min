import * as actions from '../actions';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ACTION2:
			console.log('action2 reducer ACTION2');
			return Object.assign({}, state, {
				...state,
				result: 'action2'
			});
    default:
			console.log('action2 reducer default');
      return state;
  }
}