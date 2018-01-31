import React from 'react';
import { Grid, Container, Divider } from 'semantic-ui-react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import Filters from '../containers/Filters';

const App = () => {
	return (
		<Container style={{width: '500px'}}>
			<Divider horizontal>Todo List</Divider>
			<AddTodo />
			<Grid container padded>
				<Grid.Row>
					<TodoList />
				</Grid.Row>
				<Grid.Row>
					<Filters />
				</Grid.Row>
			</Grid>
		</Container>
	);
}

export default App;
