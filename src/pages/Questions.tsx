import { motion } from "motion/react";
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
		"Quels sont ses centres d'intérêts ?",
		"Quel est votre budget?",
		"Grâce aux pouvoirs des sables anciens, votre souhait sera exaucé !",
		"Vos désirs sont des ordres. Voici mes suggestions de cadeaux. GG ça!",
	];

	const answers = [
		["Femme", "Homme", "Indifférent"],
		["Beauté", "Maison", "Mode", "High-tech", "Surprends moi"],
		[],
		[],
		["Réveler mes désirs"],
	];

	const handleSelectAnswer = (answer: string) => {
		setSelectedAnswer(answer);

		if (questionIndex === 4 && answer === "Réveler mes désirs") {
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
			setTimeout(() => setQuestionIndex(4), 3000);
		}
	}, [questionIndex]);

	return (
		<motion.div
			className="questions-container"
			initial={{ y: 100, opacity: 0 }} // Start from below
			animate={{ y: 0, opacity: 1 }} // Move to its final position
			transition={{ duration: 4 }} // Smooth transition
		>
			<div className="genie-lamp">
				<motion.img
					src="src/assets/Lassana-removebg-final.png"
					alt="Genie"
					className="genie-lassana"
					initial={{ y: 70, opacity: 50 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 2.5 }}
				/>
				<motion.img
					src="src/assets/lampsmoke.png"
					alt="Lamp"
					className="lamp-complete mirror"
					initial={{ scaleX: -1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1 }}
				/>
			</div>

			<div className="question-box">
				<p>{questions[questionIndex]}</p>

				{questionIndex === 2 ? (
					<div className="slider-container">
						<input
							type="range"
							min="0"
							max="50000"
							step="20"
							value={sliderValue}
							onChange={(e) => setSliderValue(Number(e.target.value))}
							className="budget-slider"
						/>
						<h4>Budget: {sliderValue}€</h4>
						<motion.button
							type="button"
							onClick={() => setQuestionIndex(3)}
							className="answer-button"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							Je valide
						</motion.button>
					</div>
				) : answers[questionIndex]?.length > 0 ? (
					<div className="answer-options">
						{answers[questionIndex].map((answer) => (
							<motion.button
								key={answer}
								type="button"
								onClick={() => handleSelectAnswer(answer)}
								className={`answer-button ${
									selectedAnswer === answer ? "selected" : ""
								}`}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								initial={{ x: -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.2 }}
							>
								{answer}
							</motion.button>
						))}
					</div>
				) : null}
			</div>
		</motion.div>
	);
};

export default Questions;
