import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='NavBar'>
				<h1>Flikr Search App</h1>
				<ul>
					<NavLink to='/trees'>List Item 1</NavLink>
					<NavLink to='/bears'>List Item 2</NavLink>
				</ul>
			</div>
		);
	}
}

export default NavBar;
