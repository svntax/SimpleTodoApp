import React from "react";
import "./TodoForm.css";

import TodoList from "./TodoList";

const TASKS_KEY = "storedTasks";

class TodoForm extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			tasks: [],
			currentValue: ""
		};
	}

	componentDidMount(){
		const storedTasksJsonString = localStorage.getItem(TASKS_KEY);
		if(storedTasksJsonString){
			const storedTasks = JSON.parse(storedTasksJsonString);
			this.setState({tasks: storedTasks});
		}
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
		localStorage.setItem(TASKS_KEY, JSON.stringify(this.state.tasks));
	}
	
	removeTask = (id) => {
		const filteredList = this.state.tasks.filter((task, index) => {
			return id !== (index + task.value);
		});
		this.setState({tasks: filteredList});
		localStorage.setItem(TASKS_KEY, JSON.stringify(filteredList));
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
		localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));
	}
	
	updateStrikethrough = (id, flag) => {
		const newTasks = this.state.tasks.slice();
		const taskID = newTasks.findIndex((task, index) => {
			return (index + task.value) === id;
		});
		newTasks[taskID].strikethrough = flag;
		this.setState({tasks: newTasks});
		localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));
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