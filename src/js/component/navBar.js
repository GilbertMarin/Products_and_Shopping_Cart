import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
	return (
		<>
			<ul className="nav flex-column">
				<li className="nav-item">
					<Link to="/" className="nav-link active" href="#">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Productos" className="nav-link" href="#">
						Productos
					</Link>
				</li>
			</ul>
		</>
	);
}
