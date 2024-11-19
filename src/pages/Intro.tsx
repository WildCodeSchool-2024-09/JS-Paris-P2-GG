import { useState } from "react";
import "./Intro.css";
import genieImg from "../assets/Lassana-removebg-final.png";
import lampImg from "../assets/justlamp.png";
import smokeImg from "../assets/justsmoke.png";

interface IntroProps {
	onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
	const [showSmoke, setShowSmoke] = useState(false);
	const [showGenie, setShowGenie] = useState(false);

	const handleLampClick = () => {
		setShowSmoke(true);
		setTimeout(() => {
			setShowGenie(true);
		}, 2000);
	};

	return (
		<div className="intro">
			<h1>
				Bienvenue sur la Lampe de Merveilles. <br />
				Frottez-moi
			</h1>
			<div className="lamp-container">
				<img
					src={lampImg}
					alt="Lamp"
					className="lamp"
					onClick={handleLampClick}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							handleLampClick();
						}
					}}
				/>
				{showSmoke && <img src={smokeImg} alt="Smoke" className="smoke" />}
				{showGenie && (
					<div className="genie-dialog">
						<img src={genieImg} alt="Genie" className="genie" />
						<div className="dialog">
							<p>
								Bonjour, je m'appelle Lassana. <br />
								Je suis là pour vous aider à choisir un cadeau parfait! <br />
								On y va?
							</p>
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button onClick={onComplete} className="dialog-button">
								GG ça!!
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Intro;
