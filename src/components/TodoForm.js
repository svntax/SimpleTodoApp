import React from "react";
import "./TodoForm.css";

import TodoList from "./TodoList";

class TodoForm extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			tasks: [],
			currentValue: "",
			editing: -1
		};
	}
	
	handleKeyPress = (event) => {
		if(event.keyCode == 13){
			if(this.state.currentValue.trim()){
				this.addTask(this.state.currentValue.trim());
				this.setState({currentValue: ""});
			}
			
			event.preventDefault();
		}
	}
	
	handleChange = (event) => {
		this.setState({currentValue: event.target.value});
	}
	
	/*handleSubmit = (event) => {
		if(this.state.currentValue.trim()){
			this.addTask(this.state.currentValue.trim());
			this.setState({currentValue: ""});
		}
		
		event.preventDefault();
	}*/
	
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
	
	updateTask = (id, value) => {
		console.log(id + ": " + value);
		const newTasks = this.state.tasks.slice();
		if(value.trim()){
			newTasks[id] = value.trim();
		}
		this.setState({editing: -1, tasks: newTasks});
	}
	
	render(){
		return (
			<div className="todo-form">
				<input className="todo-input-text" type="text" placeholder="New task..." value={this.state.currentValue}
				onChange={this.handleChange} onKeyDown={this.handleKeyPress}></input>
				<TodoList list={this.state.tasks} handleDelete={this.removeTask} stopEditing={this.updateTask} />
			</div>
		);
	}
	
}

export default TodoForm;