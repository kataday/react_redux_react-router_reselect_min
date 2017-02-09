import 'babel-polyfill';
import React from 'react';
import { Router } from 'react-router';
import routes from '../routes';
import { Provider } from 'react-redux';

export default class extends React.Component {
	render() {
		const { store, history } = this.props;
		return (
				<Provider store={store}>
			  	<Router history={history} routes={routes} />
				</Provider>
		);
	}
}
