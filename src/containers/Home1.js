import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(
	state => ({action1: state.action1.result}),
	dispatch => bindActionCreators(actions, dispatch)
)
export default class Home1 extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		console.log('home1 mounted');
		this.props.action1();
	}
	
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}
	
	render() {
		return (
			<div>
				<Link to="/home2">Home2</Link>
			</div>
		);
	}
}
