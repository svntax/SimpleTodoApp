import React from "react";

class Task extends React.Component {
	
	constructor(props){
		super(props);
		//TODO taskComplete isn't being tracked properly when tasks are deleted (related to issue from using index as key)
		this.state = {taskComplete: "none", color: "#16193B", editedValue: "", value: "", isBeingEdited: false};
	}
	
	taskCheckboxChanged = (event) => {
		this.setState({taskComplete: event.target.checked ? "line-through" : "none", color: event.target.checked ? "gray" : "#16193B"});
	}
	
	handleDelete = () => {
		this.props.handleDelete(this.props.id);
	}
	
	handleClick = () => {
		this.setState({isBeingEdited: true, editedValue: this.props.value});
	}
	
	handleChange = (event) => {
		this.setState({editedValue: event.target.value});
	}
	
	handleKeyPress = (event) => {
		if(event.keyCode == 13){
			this.stopEditing()
		}
	}
	
	stopEditing = () => {
		this.props.stopEditing(this.props.id, this.state.editedValue);
		this.setState({isBeingEdited: false});
	}
	
	render(){
		return (
			<li>
				<input ref={input => input && input.focus()} className="todo-input-text" type="text" style={{display: this.state.isBeingEdited ? "block" : "none"}}
				value={this.state.editedValue}
				onChange={this.handleChange}
				onBlur={this.stopEditing}
				onKeyDown={this.handleKeyPress}
				>
				</input>
				<input className="task-checkbox" type="checkbox" onChange={this.taskCheckboxChanged} style={{display: this.state.isBeingEdited ? "none" : "inline"}}></input>
				<span style={{textDecoration: this.state.taskComplete, color: this.state.color, display: this.state.isBeingEdited ? "none" : "inline"}}
				onDoubleClick={this.handleClick}>{this.props.value}</span>
				<div className="delete-button" onClick={this.handleDelete} style={{display: this.state.isBeingEdited ? "none" : "inline"}}><span>x</span></div>
			</li>
		);
	}
	
}

export default Task;