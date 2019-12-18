import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../CSS/NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<div className='NavBar'>
				<h1>Flikr Search App</h1>
				<ul>
					<NavLink to='/trees'>Pictures of Trees</NavLink>
					<NavLink to='/streams'>Pictures of Streams</NavLink>
				</ul>
			</div>
		);
	}
}

export default NavBar;
