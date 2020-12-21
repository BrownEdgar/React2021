import React, { Component } from 'react'
import './App.css';
import data from "./data.json";
import "./Developers.css"
import Developers from './Developers'
export default class App extends Component {
	state = {
		users: ["Edgar", "Seyran", "Lucy", "ArtyomZ", "Artyom"],
		isShow: false,
		timeToChange:false,
	}
	handleClick(){
		let users = this.state.users;
		this.setState({ users, isShow: !this.state.isShow  });
	}
	deleter(id){
		let users = this.state.users;
		users.splice(id, 1);
		this.setState({ users, isShow: this.state.isShow });
	}
	handleChangeClass(){
		this.setState((prevState) => {
			return {
				...prevState,
				timeToChange: !prevState.timeToChange
			}
	})
}
	render() {
		
		return (
			<div className="main">
				{ this.state.isShow && this.state.users.map((elem,index) => {
					return <Developers
					 	name={elem} 
					 	index= {index}
						deleter={2326}
						key={index}
						timeToChange={this.state.timeToChange}
						age={25}/>
				})}
				<button onClick={this.handleClick.bind(this)}>{this.state.isShow ? "Hide" : "show"}</button>
				<button onClick={this.handleChangeClass.bind(this)}>Change Class</button>
			</div>
		)
	}
}
