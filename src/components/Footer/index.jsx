import React, { Component } from 'react'

export default class Footer extends Component {


	render() {
		const {todos}=this.props
		const newTodos=todos.filter(t=>t.done===true)
		return (
		<div>
			<input type="checkbox" onChange={event=>this.props.handleCheckAll(event.target.checked)} checked={newTodos.length===todos.length&&todos.length!==0?true:false} />
			<span>DONE {newTodos.length} / ALL {todos.length}</span>&nbsp;
			<button onClick={this.props.clear}>clear done</button>
		</div>
		)
	}
}




