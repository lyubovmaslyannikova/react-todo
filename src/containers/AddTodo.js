import { connect } from 'react-redux';
import { handleInput, addTodo } from '../actions';
import AddTodo from '../components/AddTodo';

const mapStateToProps = state => {
	return state.todos;
};

const mapDispatchToProps = {
	addTodo,
	handleInput
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
