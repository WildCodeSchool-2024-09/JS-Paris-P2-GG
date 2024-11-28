import { useState } from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import genieImg from "../assets/Lassana-removebg-final.png";
import lampSound from "../assets/geniesound.mp3";
import ggSound from "../assets/gg.mp3";
import lampImg from "../assets/justlamp.png";
import smokeImg from "../assets/justsmoke.png";

function Intro() {
	const navigate = useNavigate();
	const [showSmoke, setShowSmoke] = useState(false);
	const [showGenie, setShowGenie] = useState(false);
	const [showTitle, setShowTitle] = useState(true);

	const handleLampClick = () => {
		const audio = new Audio(lampSound);
		audio.play();

		setShowTitle(false);
		setShowSmoke(true);
		setTimeout(() => {
			setShowGenie(true);
		}, 3000);
	};

	const handleGGClick = () => {
		const audio = new Audio(ggSound);
		audio.play();
		navigate("/questions");
	};

	return (
		<div>
			{showTitle && <h1 className="intro-title">Cliquez sur la lampe!</h1>}{" "}
			<div className="intro">
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
									Je suis là pour vous aider <br />à choisir un cadeau parfait!{" "}
									<br />
									On y va?
								</p>
								<button
									onClick={handleGGClick}
									className="dialog-button"
									type="button"
								>
									GG ça!!
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Intro;
