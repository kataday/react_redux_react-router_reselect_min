import * as actions from '../actions';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.ACTION1:
			console.log('action1 reducer ACTION1');
			return Object.assign({}, state, {
				...state,
				result: 'action1'
			});
    default:
			console.log('action1 reducer default');
      return state;
  }
}