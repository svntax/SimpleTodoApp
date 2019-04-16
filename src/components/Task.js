import React from "react";

class Task extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {taskComplete: "none", color: "#16193B"};
	}
	
	taskCheckboxChanged = (event) => {
		this.setState({taskComplete: event.target.checked ? "line-through" : "none", color: event.target.checked ? "gray" : "#16193B"});
	}
	
	handleDelete = () => {
		this.props.handleDelete(this.props.id);
	}
	
	render(){
		return (
			<li>
				<input className="task-checkbox" type="checkbox" onChange={this.taskCheckboxChanged}></input>
				<span style={{textDecoration: this.state.taskComplete, color: this.state.color}}>{this.props.value}</span>
				<div className="delete-button" onClick={this.handleDelete}><span>x</span></div>
			</li>
		);
	}
	
}

export default Task;