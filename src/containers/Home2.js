import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(
	state => ({action2: state.action2.result}),
	dispatch => bindActionCreators(actions, dispatch)
)
export default class Home2 extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		console.log('home2 mounted');
		this.props.action2();
	}
	
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}
	
	render() {
		return (
			<div>
				<Link to="/home1">Home1</Link>
			</div>
		);
	}
}
