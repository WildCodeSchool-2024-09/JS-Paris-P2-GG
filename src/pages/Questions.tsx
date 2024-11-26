import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./Questions.css";
import { useNavigate } from "react-router-dom";
import { useAnswers } from "../context/AnswersContext";

interface QuestionsProps {
	onComplete: (answers: string[], budget: number) => void;
}

function Questions({ onComplete }: QuestionsProps) {
	const navigate = useNavigate();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<string[]>(["", ""]);
	const [sliderValue, setSliderValue] = useState<number>(50);

	const questions = [
		"1/3 Le cadeau est pour qui?",
		"2/3 Quels sont ses centres d'intérêts ?",
		"3/3 Quel est votre budget?",
		"Vos désirs sont des ordres. Voici mes suggestions de cadeaux.",
	];

	const answers = [
		["Femme", "Homme", "Indifférent"],
		["Beauté", "Maison", "Mode", "Multimedia", "Surprends moi"],
		[],
		["Réveler mes désirs"],
	];

	const handleSelectAnswer = (answer: string) => {
		if (currentQuestion < 2) {
			setSelectedAnswers((prev) => {
				const updatedAnswers = [...prev];
				updatedAnswers[currentQuestion] = answer;

				return updatedAnswers;
			});
		} else if (currentQuestion === 3 && answer === "Réveler mes désirs") {
			navigate("/resultats");
		} else {
			setCurrentQuestion((prev) => prev + 1);
		}
	};

	return (
		<motion.div className="questions-container">
			<div className="genie-lamp">
				<motion.img
					src="src/assets/Lassana-removebg-final.png"
					alt="Genie"
					className="genie-lassana"
				/>
				<motion.img
					src="src/assets/lampsmoke.png"
					alt="Lamp"
					className="lamp-complete mirror"
				/>
			</div>
			<div className="question-box">
				<p>{questions[currentQuestion]}</p>

				{currentQuestion === 2 ? (
					<div className="slider-container">
						<input
							title="budget"
							type="range"
							min="5"
							max="3000"
							step="10"
							value={sliderValue}
							onChange={(e) => setSliderValue(Number(e.target.value))}
							className="budget-slider"
						/>
						<h4>{sliderValue}€</h4>
						<motion.button
							type="button"
							onClick={() => {
								setSelectedAnswers((prev) => {
									const updatedAnswers = [...prev];
									updatedAnswers[currentQuestion] = `${sliderValue}€`;
									return updatedAnswers;
								});
								setCurrentQuestion(3);
							}}
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
								className="answer-button"
								onClick={() => handleSelectAnswer(answer)}
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
