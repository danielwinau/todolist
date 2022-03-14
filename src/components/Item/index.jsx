import React, { Component } from 'react'

export default class Item extends Component {

	state={
		mouseIn:false
	}

	handleChange=()=>{
		const {id,done}=this.props
		this.props.checkTodo(id,done)
	}

	handleDelete=()=>{
		const {id}=this.props
		this.props.deleteTodo(id)
	}
		
	render() {
		const {id, name, done}=this.props
		return (
		<li onMouseEnter={()=>this.setState({mouseIn:true})} onMouseLeave={()=>this.setState({mouseIn:false})} style={{backgroundColor:this.state.mouseIn?'skyblue':'white'}}>
			<input type="checkbox" checked={done} onChange={this.handleChange} />
			<span>{name}</span>&nbsp;
			<button onClick={this.handleDelete}>DEL</button>
		</li>
		)
	}
}

