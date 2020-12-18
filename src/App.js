import React, { Component } from 'react'
import './App.css';
import data from "./data.json";
import "./Developers.css"
import Developers from './Developers'
export default class App extends Component {
	state = {
		users: ["Edgar", "Seyran", "Lucy", "ArtyomZ", "Artyom"],
		isShow: false
	}
	handleClick(){
		let users = this.state.users;
		this.setState({ users, isShow: !this.state.isShow  });
	}
	render() {
		
		return (
			<div className="main">
				{ this.state.isShow && this.state.users.map((elem,index) => {
					return <Developers name={elem} key={index}/>
				})}
				<button onClick={this.handleClick.bind(this)}>{this.state.isShow ? "Hide" : "show"}</button>
			</div>
		)
	}
}
