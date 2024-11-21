import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./Questions.css";

interface QuestionsProps {
	onComplete: () => void;
}

function Questions({ onComplete }: QuestionsProps) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [sliderValue, setSliderValue] = useState<number>(50);

	const questions = [
		"Le cadeau est pour qui?",
		"Quels sont ses centres d'intérêts ?",
		"Quel est votre budget?",
		"Vos désirs sont des ordres. Voici mes suggestions de cadeaux.",
	];

	const answers = [
		["Femme", "Homme", "Indifférent"],
		["Beauté", "Maison", "Mode", "High-tech", "Surprends moi"],
		[],
		["Réveler mes désirs"],
	];

	const handleSelectAnswer = (answer: string) => {
		setSelectedAnswer(answer);

		if (currentQuestion === 3 && answer === "Réveler mes désirs") {
			onComplete();
		} else {
			setSelectedAnswer(null);
			setCurrentQuestion((prev) => prev + 1);
		}
	};

	return (
		<motion.div
			className="questions-container"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 4 }}
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
				<p>{questions[currentQuestion]}</p>

				{currentQuestion === 2 ? (
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
							onClick={() => setCurrentQuestion(3)}
							className="answer-button"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							Je valide
						</motion.button>
					</div>
				) : answers[currentQuestion]?.length > 0 ? (
					<div className="answer-options">
						{answers[currentQuestion].map((answer) => (
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
}

export default Questions;
