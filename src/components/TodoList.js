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
					<Task key={index} id={index} value={task} handleDelete={this.props.handleDelete}/>
				);
			})}</ul>
		);
	}
	
}

export default TodoList;