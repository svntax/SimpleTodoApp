import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<ul className="todo-list">{this.props.list.map((task, index) => {
				return (<li key={index}>{task}</li>);
			})}</ul>
		);
	}
	
}

export default TodoList;