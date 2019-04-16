import React from "react";
import "./TodoForm.css";

import TodoList from "./TodoList";

class TodoForm extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			tasks: [],
			currentValue: ""
		};
	}
	
	handleChange = (event) => {
		this.setState({currentValue: event.target.value});
	}
	
	handleSubmit = (event) => {
		if(this.state.currentValue.trim()){
			this.addTask(this.state.currentValue.trim());
			this.setState({currentValue: ""});
		}
		
		event.preventDefault();
	}
	
	addTask = (value) => {
		this.state.tasks.push(value.trim());
		this.setState({tasks: this.state.tasks});
	}
	
	removeTask = (id) => {
		const filteredList = this.state.tasks.filter((task, index) => {
			return id !== index;
		});
		this.setState({tasks: filteredList});
	}
	
	render(){
		return (
			<div className="todo-form">
				<form onSubmit={this.handleSubmit}>
					<input className="todo-input-text" type="text" placeholder="New task..." value={this.state.currentValue} onChange={this.handleChange}></input>
					<TodoList list={this.state.tasks} handleDelete={this.removeTask} />
				</form>
			</div>
		);
	}
	
}

export default TodoForm;