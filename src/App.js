import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={routerProps => <Gallery {...routerProps} />}
				/>
				<Route
					exact
					path='/:id'
					render={routerProps => <Gallery {...routerProps} />}
				/>
			</Switch>
		);
	}
}

export default App;
