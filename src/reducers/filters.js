import * as types from '../actions/actionType';

const initialState = {
	filter: 'All'
};

function filters(state = initialState, action) {
	switch(action.type) {
		case types.SET_FILTER:
			return {
				...state,
				filter: action.payload.filter
			};

		default:
			return state;
	}
}

export default filters;
