import React from "react";
import "./App.css";

import TodoForm from "./TodoForm";

class App extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div className="app">
				<div className="main-header">Simple To-Do App</div>
				<TodoForm />
			</div>
		);
	}
	
}

export default App;