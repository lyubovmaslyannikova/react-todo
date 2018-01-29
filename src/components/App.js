import React from 'react';
import { Grid } from 'semantic-ui-react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import Filters from '../containers/Filters';

const App = () => {
	return (
		<Grid padded>
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
	);
}

export default App;
