import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Filters extends Component {
	render() {
		const filters = ['All', 'Completed', 'Active'];
		const { filter, setFilter } = this.props;

		return (
			<Button.Group fluid>
				{filters && filters.map((text, index) => (
					<Button
						key={index}
						content={text}
						active={filter === text}
						onClick={() => setFilter(text)}
					/>
				))}
			</Button.Group>
		);
	}
}

export default Filters;
