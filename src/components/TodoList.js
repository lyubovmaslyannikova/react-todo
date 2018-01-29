import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

class TodoList extends Component {
	render() {
		const { todos, toggleTodo } = this.props;

		return (
			<List>
				{todos && todos.map(todo => (
					<List.Item key={todo.id}>
						<List.Content>
							<Button
								basic
								size='mini'
								floated='left'
								icon={todo.isCompleted ? 'checkmark' : 'remove'}
								color={todo.isCompleted ? 'teal' : 'grey' }
								onClick={() => toggleTodo(todo.id)}
							/>
							{todo.text}
						</List.Content>
					</List.Item>
				))}
			</List>
		)
	};
}

export default TodoList;
