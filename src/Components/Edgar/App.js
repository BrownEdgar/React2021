import React, { Component } from 'react'
import './App.css'
import Products from "./Products";
import Total from './Total';
export default class App extends Component {
	state = {
		products: [
			{id:1, name:"apple iPad", memory: "32", wifi:true,imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",price: 1500},
			{id:2, name:"apple iPad", memory: "32", wifi:true,imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",price: 288},
			{id:3, name:"apple iPad", memory: "32", wifi:false,imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",price: 700},
			{ id:4, name: "apple iPad", memory: "32", wifi: false, imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", price: 70 },
		]
	}
	render() {
		return (
			<div className="main">
				<div className="header">
					<h1>shopping card</h1>
					<span>&#22291;</span>
				</div>
				<Products data={this.state.products}/>
				<Total data={this.state.products}/>
			</div>
		)
	}
}
