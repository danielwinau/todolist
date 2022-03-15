import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {

	state={
		todos:[
			{id:'001',name:"HTML",done:false},
			{id:'002',name:"CSS",done:true},
			{id:'003',name:"JS",done:false},
			{id:'004',name:"REACT",done:true},
		]
	}

	addTodo=(todoObj)=>{
		const {todos}=this.state
		this.setState({todos:[todoObj,...todos]})
	}

	checkTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((t)=>{
			if(t.id === id) return {...t,done:!done}
			else return t
		})
		this.setState({todos:newTodos})
	}


	deleteTodo = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter((t)=>{return t.id !== id}
		)
		this.setState({todos:newTodos})
	}
	
	handleCheckAll = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map((t)=>({...t,done})
		)
		this.setState({todos:newTodos})
	}

	clear = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter(t=>t.done=== false)
		this.setState({todos:newTodos})
	}




	render() {
		const {todos}=this.state
		return (
		<div>
			<Header addTodo={this.addTodo} />
			<List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo} />
			<Footer todos={todos} handleCheckAll={this.handleCheckAll} clear={this.clear} />
		</div>
		)
	}
}


