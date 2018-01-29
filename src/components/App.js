import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import Filters from '../containers/Filters';

const App = () => {
	return (
		<Container style={{width: '500px'}}>
			<Grid container padded>
				<Grid.Row>
					<AddTodo />
				</Grid.Row>
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
