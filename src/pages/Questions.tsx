import { useState } from "react";
import "./Questions.css";

interface QuestionsProps {
	onComplete: () => void;
}

const Questions: React.FC<QuestionsProps> = ({ onComplete }) => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

	const questions = [
		"Le cadeau est pour qui?",
		"La personne est un proche?",
		"Quel est votre budget?",
	];

	const answers = [
		["Femme", "Homme", "Indifférent"],
		["Oui", "Non"],
		["Petit", "Moyenne", "Grand"],
	];

	const handleSelectAnswer = (answer: string) => {
		setSelectedAnswer(answer);

		if (questionIndex < questions.length - 1) {
			setTimeout(() => {
				setQuestionIndex((prev) => prev + 1);
				setSelectedAnswer(null);
			}, 500);
		} else {
			setTimeout(onComplete, 500);
		}
	};

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
				<div className="answer-options">
					{answers[questionIndex].map((answer, index) => (
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
			</div>
		</div>
	);
};

export default Questions;
