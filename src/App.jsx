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


/* 
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

	//初始化状态
	state = {
		todos:[
			{id:'001',name:"吃饭",done:false},
			{id:'002',name:"睡觉",done:true},
			{id:'003',name:"打程老师",done:true},
			{id:'004',name:"学习",done:true},
		]
	}

	//状态在哪里，操作状态的方法就在哪里
	addTodo = (todoObj)=>{
		//获取原来的todos
		const {todos} = this.state
		//更新状态
		this.setState({todos:[todoObj,...todos]})

		//不推荐下面的写法，因为如下写法通过非setState形式修改了state中的值
		//因而如下写法，在某些情况下状态不更新
		/* let {todos} = this.state
		todos.unshift(todoObj)
		this.setState({todos}) */
	/*	
	}

	//勾选or取消勾选一个todo的回调
	checkTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((t)=>{
			if(t.id === id) return {...t,done}
			else return t
		})
		this.setState({todos:newTodos})
	}

	//删除一个todo的回调
	deleteTodo = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter((t)=>{
			return t.id !== id
		})
		this.setState({todos:newTodos})
	}

	//全选or取消全选
	checkAll = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map((t)=>{
			return {...t,done}
		})
		this.setState({todos:newTodos})
	}

	clear = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((t)=>{
			return !t.done
		})
		this.setState({todos:newTodos})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} checkAll={this.checkAll} clear={this.clear}/>
				</div>
			</div>
		)
	}
} */