import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavBar } from "./component/navBar";
import Products from "./component/Productos";
import Home from "./component/home";

//create your first component
export function App() {
	return (
		<Router>
			<div className="container">
				<NavBar />
				<hr />
				<Switch>
					<Route path="/Productos">
						<Products />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
