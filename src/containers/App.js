import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div>
				{this.props.children}
			</div>
    );
  }
}
