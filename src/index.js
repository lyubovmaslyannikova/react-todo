import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import App from './components/App';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
