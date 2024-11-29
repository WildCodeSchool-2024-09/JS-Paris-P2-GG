import "./Recap.css";
import LassanaTete from "../assets/Lassana-tete-solol.png";
import Narguile from "../assets/narguile.png";
import { useAnswers } from "../context/AnswersContext";

function Recap() {
	const { answers, budget } = useAnswers();

	return (
		<div className="recap-container">
			<img src={LassanaTete} alt="Lassana" className="avatar-genie" />
			<div className="recap-box">
				<h2>Récapitulatif</h2>

				<div className="recap-answer">
					<p>{answers[0] || "Indéfini"}</p>
					<img src={Narguile} alt="narguilé" className="narguile-puces" />
				</div>

				<div className="recap-answer">
					<p>{answers[1] || "Indéfini"}</p>
					<img src={Narguile} alt="narguilé" className="narguile-puces" />
				</div>

				<div className="recap-answer">
					<p>{budget ? `${budget}€` : "Indéfini"}</p>
					<img src={Narguile} alt="narguilé" className="narguile-puces" />
				</div>
			</div>
		</div>
	);
}

export default Recap;
