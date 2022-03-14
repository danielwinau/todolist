import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Header extends Component {

	addTodo=(event)=>{
		if(event.keyCode!==13) return 
		this.props.addTodo({id:nanoid(),name:event.target.value,done:false})
		event.target.value=''
	}

	render() {
		return (
		<div>
			<input type="text" onKeyUp={this.addTodo} placeholder="what to do?" />
		</div>
		)
	}
}

