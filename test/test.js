
import Add from '../dist/add.js'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

describe('add', function () {

	let scope, sandboxEl

	beforeEach(function () {
		sandboxEl = $('<div>').attr('id', 'sandbox').appendTo($('body'))
	})

	afterEach(function() {
		$('#sandbox').remove()
	})

	function nextTick(run) {
		setTimeout(run, 100)
	}
	
	function prepare(_props = {}) {

		let mountNode = sandboxEl[0]
		class App extends Component {
			constructor(props) {
				super(props)
				this.state = $.extend({}, {
					a: 0,
					b: 1
				}, _props)
			}


			render() {
				return <Add {...this.state} />
			}
		}

		ReactDOM.render(
			<App />,
			mountNode
		)

	}

	// Tests

	describe('basic', function () {

		it('should 1 + 0 = 1', function(done) {
			prepare({
				a: 1
				,b: 0
			})
			setTimeout(function() {
				expect($('#sandbox').text()).to.equal('1 + 0 = 1')
				done()
			}, 100)

		})

	})

	//end
})
