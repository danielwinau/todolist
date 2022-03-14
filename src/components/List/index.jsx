import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {


	render() {

		const {todos,checkTodo, deleteTodo}=this.props

		return (
		<ul>
			{
				todos.map((todoObj)=>
					<Item key={todoObj.id} {...todoObj} checkTodo={checkTodo} deleteTodo={deleteTodo} />
				)
			}
		</ul>
		)
	}
}

