import "./Cards.css";
import React, { useEffect, useState } from "react";
interface GameInterface {
	dataGame: {
		id: number;
		price: number;
		title: string;
		platform: string;
		releaseDate: string;
		genre: string;
		image: string;
	};
}
function Cards({ dataGame }: GameInterface) {
	return (
		<figure className="card">
			<div className="cardimage">
				<img src={dataGame.image} alt={dataGame.title} />
			</div>

			<figcaption className="caption">
				<ul className="custom-list">
					<li>{dataGame.title}</li>
					<li>{dataGame.price},99€</li>
				</ul>
				<img
					src="..\src\assets\magic-lamp_yellow.png"
					alt="magic"
					className="magic-lamp"
				/>
			</figcaption>
		</figure>
	);
}

export default Cards;
