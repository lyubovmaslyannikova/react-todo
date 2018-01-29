import * as types from '../actions/actionType';

const initialState = {
	inputValue: '',
	todos: []
};

function todos(state = initialState, action) {
	switch(action.type) {
		case types.ADD_TODO:
 			return {
 				...state,
 				todos: [
 					...state.todos, {
						id: state.todos.length,
						text: action.payload.text,
						isCompleted: false
					}
 				]
 			};

		case types.TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.payload.id) {
						return { ...todo, isCompleted: !todo.isCompleted };
					}

					return todo;
				})
			};

		case types.SET_TODO_INPUT:
			return {
				...state,
				inputValue: action.payload.value || ''
			};

		default:
			return state;
	}
}

export default todos;
