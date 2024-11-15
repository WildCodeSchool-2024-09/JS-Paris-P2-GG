import { useEffect, useState } from "react";
import "./Questions.css";

interface QuestionsProps {
	onComplete: () => void;
}

const Questions: React.FC<QuestionsProps> = ({ onComplete }) => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [sliderValue, setSliderValue] = useState<number>(50);

	const questions = [
		"Le cadeau est pour qui?",
		"La personne est un proche?",
		"Quel est votre budget?",
		"GG ça. Grâce aux pouvoirs des sables anciens, votre souhait sera exaucé !",
		"Vos désirs sont des ordres. Voici mes suggestions de cadeaux",
	];

	const answers = [
		["Femme", "Homme", "Indifférent"],
		["Oui", "Non", "Indifférent"],
		[],
		[],
		["Réveler mes désirs"],
	];

	const sound = new Audio("src/assets/ggsong.mp3");

	const handleSelectAnswer = (answer: string) => {
		setSelectedAnswer(answer);

		if (questionIndex === 4 && answer === "Réveler mes désirs") {
			sound.play();
			setTimeout(() => {
				onComplete();
			}, 500);
		} else {
			setTimeout(() => {
				setSelectedAnswer(null);
				setQuestionIndex((prev) => prev + 1);
			}, 500);
		}
	};

	useEffect(() => {
		if (questionIndex === 3) {
			setTimeout(() => setQuestionIndex(4), 4000);
		}
	}, [questionIndex]);

	return (
		<div className="questions-container">
			<div className="genie-lamp">
				<img
					src="src/assets/Lassana-removebg-final.png"
					alt="Lala"
					className="genie-lassana"
				/>
				<img
					src="src/assets/lampsmoke.png"
					alt="Lampcomplete"
					className="lamp-complete"
				/>
			</div>
			<div className="question-box">
				<p>{questions[questionIndex]}</p>
				{questionIndex === 2 ? (
					<div className="slider-container">
						<input
							type="range"
							min="0"
							max="3000"
							step="10"
							value={sliderValue}
							onChange={(e) => setSliderValue(Number(e.target.value))}
							className="budget-slider"
						/>
						<h4>Budget: €{sliderValue}</h4>
						<button
							type="button"
							onClick={() => setQuestionIndex(3)}
							className="answer-button"
						>
							Je valide
						</button>
					</div>
				) : answers[questionIndex]?.length > 0 ? (
					<div className="answer-options">
						{answers[questionIndex].map((answer) => (
							<button
								key={answer}
								type="button"
								onClick={() => handleSelectAnswer(answer)}
								className={`answer-button ${selectedAnswer === answer ? "selected" : ""}`}
							>
								{answer}
							</button>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Questions;
