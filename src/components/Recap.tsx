import "./Recap.css";
import React from "react";
import "./Recap.css";
import { useAnswers } from "../context/AnswersContext";

function Recap() {
	const { answers, budget } = useAnswers();

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
					<p>{answers[0] || "Indéfini"}</p>
					<img
						src="src/assets/narguile.png"
						alt="narguilé"
						className="narguile-puces"
					/>
				</div>

				<div className="recap-answer">
					<p>{answers[1] || "Indéfini"}</p>
					<img
						src="src/assets/narguile.png"
						alt="narguilé"
						className="narguile-puces"
					/>
				</div>

				<div className="recap-answer">
					<p>{budget ? `${budget}€` : "Indéfini"}</p>
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
