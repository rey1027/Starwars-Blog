import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 py-3 px-5 ">
			
			<span className="navbar-brand ms-5 mb-0 h1">
			<a href="https://imgbb.com/"><img src="https://i.ibb.co/khNRBYC/star-wars-logo.png" alt="star-wars-logo" border="0"/></a>
			</span>
		
			<div className="ml-auto">
				<div class="dropdown me-5">
					<button class="btn btn-primary dropdown-toggle p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg bg-secondary rounded text-white px-1"> <b>0</b></span>
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
				
			</div>
		</nav>
	);
};
