import React, { Component, PropTypes } from 'react'
import Lib from './example-lib.jsx'

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			a: 0,
			b: 1
		}
	}

	render() {

		return (
			<div>
				<Lib {...this.state} />
			</div>
		)
	}
	
}