import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<p className="navbar-brand m-2">
						Navbar
						<span className="badge nav-pills bg-secondary">
							{this.props.totalCounters}
						</span>
					</p>
				</nav>
			</div>
		);
	}
}

export default NavBar;
