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
		<div className="allcards">
			<figure className="card">
				<img src={dataGame.image} alt={dataGame.title} className="cardimage" />
				<figcaption className="caption">
					<ul className="custom-list">
						<li>{dataGame.title}</li>
						<li>{dataGame.price},99€</li>
					</ul>
				</figcaption>
			</figure>
		</div>
	);
}

export default Cards;
