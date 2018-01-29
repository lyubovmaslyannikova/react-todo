import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class AddTodo extends Component {
	handleSubmit = e => {
		const todo = this.props.inputValue.trim();

		if (todo.length) {
			this.props.addTodo(todo);
		}

		this.props.handleInput();
		e.preventDefault();
	}

	render() {
		const { inputValue, handleInput } = this.props;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Input
					value={inputValue}
					action={{ color: 'teal', icon: 'plus', content: 'Add' }}
					onChange={e => handleInput(e.target.value)}
				/>
			</Form>
		);
	}
}

export default AddTodo;
