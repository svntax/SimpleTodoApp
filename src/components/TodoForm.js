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
	
	addTask = (value) => {
		this.state.tasks.push({value: value.trim(), strikethrough: false});
		this.setState({tasks: this.state.tasks});
	}
	
	removeTask = (id) => {
		const filteredList = this.state.tasks.filter((task, index) => {
			return id !== (index + task.value);
		});
		this.setState({tasks: filteredList});
	}
	
	updateTask = (id, value) => {
		const newTasks = this.state.tasks.slice();
		const taskID = newTasks.findIndex((task, index) => {
			return (index + task.value) === id;
		});
		if(value.trim()){
			newTasks[taskID].value = value.trim();
		}
		this.setState({tasks: newTasks});
	}
	
	updateStrikethrough = (id, flag) => {
		const newTasks = this.state.tasks.slice();
		const taskID = newTasks.findIndex((task, index) => {
			return (index + task.value) === id;
		});
		newTasks[taskID].strikethrough = flag;
		this.setState({tasks: newTasks});
	}
	
	render(){
		return (
			<div className="todo-form">
				<input className="todo-input-text" type="text" placeholder="New task..." value={this.state.currentValue}
				onChange={this.handleChange} onKeyDown={this.handleKeyPress}></input>
				<TodoList list={this.state.tasks}
				handleDelete={this.removeTask}
				stopEditing={this.updateTask} 
				updateStrikethrough={this.updateStrikethrough}
				/>
			</div>
		);
	}
	
}

export default TodoForm;