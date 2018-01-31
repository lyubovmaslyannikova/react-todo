import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const filterTodos = (filter, todos) => {
	switch(filter) {
		case 'Completed':
			return todos.filter(todo => {
				return todo.isCompleted;
			});

		case 'Active':
			return todos.filter(todo => {
				return !todo.isCompleted;
			});

		default:
			return todos;
	}
};

const mapStateToProps = state => {
	return {
		...state.todos,
		todos: filterTodos(state.filters.filter, state.todos.todos)
	};
};

const mapDispatchToProps = {
	toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
