import * as types from './actionType';

export function addTodo(text) {
	return {
		type: types.ADD_TODO,
		payload: {
			text
		}
	};
}

export function toggleTodo(id) {
	return {
		type: types.TOGGLE_TODO,
		payload: {
			id
		}
	};
}

export function setFilter(filter) {
	return {
		type: types.SET_FILTER,
		payload: {
			filter
		}
	};
}

export function handleInput(value) {
	return {
		type: types.SET_TODO_INPUT,
		payload: {
			value
		}
	};
}
