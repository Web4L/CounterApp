import React from "react";

const NavBar = (props) => {
	return (
		<div>
			<nav class="navbar navbar-light bg-light">
				<a class="navbar-brand m-2" href="#">
					Navbar
					<span className="badge nav-pills bg-secondary">
						{props.totalCounters}
					</span>
				</a>
			</nav>
		</div>
	);
};

export default NavBar;
