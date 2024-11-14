import "./Recap.css";
import React from "react";

function Recap() {
	return (
		<div className="recap-container">
			<img
				src="src/assets/Lassana-tete-solol.png"
				alt="Lassana"
				className="avatar-genie"
			/>
			<div className="recap-box">
				<h2>Récapitulatif</h2>
				<div className="recap-answer">
					<p>Femme</p>
					<img
						src="src/assets/narguile.png"
						alt="narguilé"
						className="narguile-puces"
					/>
				</div>
				<div className="recap-answer">
					<p>Proche</p>
					<img
						src="src/assets/narguile.png"
						alt="narguilé"
						className="narguile-puces"
					/>
				</div>
				<div className="recap-answer">
					<p>10€ à 1500€</p>
					<img
						src="src/assets/narguile.png"
						alt="narguilé"
						className="narguile-puces"
					/>
				</div>
			</div>
		</div>
	);
}

export default Recap;
