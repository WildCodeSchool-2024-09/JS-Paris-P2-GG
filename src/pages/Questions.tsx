import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./Questions.css";
import { useNavigate } from "react-router-dom";
import { useAnswers } from "../context/AnswersContext";

function Questions() {
	const navigate = useNavigate();
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const { answers, budget, setAnswers, setBudget } = useAnswers();

	const questions = [
		"1/3 Le cadeau est pour qui?",
		"2/3 Quels sont ses centres d'intérêts ?",
		"3/3 Quel est votre budget?",
		"Vos désirs sont des ordres. Voici mes suggestions de cadeaux.",
	];

	const listAnswers = [
		["Femme", "Homme", "Indifférent"],
		["Beauté", "Maison", "Mode", "Multimedia", "Surprends moi"],
		[],
		["Réveler mes désirs"],
	];

	const handleSelectAnswer = (answer: string) => {
		if (currentQuestion < 2) {
			setAnswers((prev) => {
				const updatedAnswers = [...prev];
				updatedAnswers[currentQuestion] = answer;

				return updatedAnswers;
			});
			setCurrentQuestion((prev) => prev + 1);
		} else if (currentQuestion === 3 && answer === "Réveler mes désirs") {
			navigate("/resultats");
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
							value={budget}
							onChange={(e) => setBudget(Number(e.target.value))}
							className="budget-slider"
						/>
						<h4>{budget}€</h4>
						<motion.button
							type="button"
							onClick={() => {
								setAnswers((prev) => {
									const updatedAnswers = [...prev];
									updatedAnswers[currentQuestion] = `${budget}€`;
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
				) : listAnswers[currentQuestion]?.length > 0 ? (
					<div className="answer-options">
						{listAnswers[currentQuestion].map((answer) => (
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
