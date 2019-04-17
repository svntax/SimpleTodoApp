import React from "react";

class Task extends React.Component {
	
	constructor(props){
		super(props);

		this.state = {editedValue: "", isBeingEdited: false};
	}
	
	taskCheckboxChanged = (event) => {
		this.props.updateStrikethrough(this.props.id, event.target.checked);
	}
	
	handleDelete = () => {
		this.props.handleDelete(this.props.id);
	}
	
	handleClick = () => {
		if(!this.props.strikethrough){
			this.setState({isBeingEdited: true, editedValue: this.props.value});
		}
	}
	
	handleChange = (event) => {
		this.setState({editedValue: event.target.value});
	}
	
	handleKeyPress = (event) => {
		if(event.keyCode == 13){
			this.stopEditing();
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
				<input className="task-checkbox" type="checkbox" onChange={this.taskCheckboxChanged} checked={this.props.strikethrough} style={{display: this.state.isBeingEdited ? "none" : "inline"}}></input>
				<span style={{
						textDecoration: this.props.strikethrough ? "line-through" : "none",
						color: this.props.strikethrough ? "gray" : "#16193B", display: this.state.isBeingEdited ? "none" : "inline"}
					}
				onDoubleClick={this.handleClick}>{this.props.value}</span>
				<div className="delete-button" onClick={this.handleDelete} style={{display: this.state.isBeingEdited ? "none" : "inline"}}><span>x</span></div>
			</li>
		);
	}
	
}

export default Task;