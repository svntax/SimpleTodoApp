import React from "react";
import "./TodoList.css";

import Task from "./Task";

class TodoList extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<ul className="todo-list">{this.props.list.map((task, index) => {
				return (
					<Task key={index+task.value} id={index+task.value} value={task.value} strikethrough={task.strikethrough}
					handleDelete={this.props.handleDelete}
					handleClick={this.props.handleClick}
					stopEditing={this.props.stopEditing}
					updateStrikethrough={this.props.updateStrikethrough}
					/>
				);
			})}</ul>
		);
	}
	
}

export default TodoList;