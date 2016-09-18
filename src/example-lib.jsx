
import React, { Component, PropTypes } from 'react'

class Add extends Component {

	static propTypes = {
		a: PropTypes.number
		,b: PropTypes.number
	}

	constructor(props) {
		super(props)
	}


	render() {
		const {a, b} = this.props
		return (
			<div>
				{a} + {b} = {a+b}
			</div>
		)
	}
}

module.exports = exports.default = Add