import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.css";
import Card from "../component/card";

export const Home = () => {
	return(
	<>
	<div className="container mb-5">
		<h1 className="text-danger my-5">Characters</h1>
		<div className="d-inline-flex ">
			<Card />
		</div>
	</div>
	<div className="container mb-5">
		<h1 className="text-danger my-5">Planets</h1>
		<div className="d-inline-flex ">
			<Card />
		</div>
	</div>
	<div className="container mb-5">
		<h1 className="text-danger my-5">Vehicles</h1>
		<div className="d-inline-flex ">
			<Card />
		</div>
	</div>
	</>
	
	);
};
