import { motion } from "motion/react";
import { useState } from "react";
import "./Questions.css";
import { useNavigate } from "react-router-dom";
import { useAnswers } from "../context/AnswersContext";

function Questions() {
	const [indexQuestion, setIndexQuestion] = useState(0);
	const navigate = useNavigate();
	const { answers, budget, setAnswers, setBudget } = useAnswers();

	const questions = [
		"Le cadeau est pour qui?",
		"Choisir un centre d'intérêt ?",
		"Quel est votre budget?",
		"Vos désirs sont des ordres. Voici mes suggestions de cadeaux.",
	];

	const numberQuestion = indexQuestion + 1;

	const listAnswers = [
		["Femme", "Homme", "Indifférent"],
		["Beauté", "Maison", "Mode", "Tech & Loisirs", "Surprends moi"],
		[],
		["Réveler mes désirs"],
	];

	const handleSelectAnswer = (answer: string) => {
		if (indexQuestion < 2) {
			setAnswers((prev) => {
				const updatedAnswers = [...prev];
				updatedAnswers[indexQuestion] = answer;
				return updatedAnswers;
			});
			setIndexQuestion((prev) => prev + 1);
		} else if (indexQuestion === 3 && answer === "Réveler mes désirs") {
			navigate("/resultats");
		}

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
				<div>
					<div className="question-box">
						{indexQuestion < questions.length - 1 ? (
							<p>
								Question {numberQuestion} / {questions.length - 1}
							</p>
						) : null}
						<p>{questions[indexQuestion]}</p>
					</div>

					{indexQuestion === 2 ? (
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
										updatedAnswers[indexQuestion] = `${budget}€`;
										return updatedAnswers;
									});
									setIndexQuestion(3);
								}}
								className="answer-button"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								Je valide
							</motion.button>
						</div>
					) : listAnswers[indexQuestion]?.length > 0 ? (
						<div className="answer-options">
							{listAnswers[indexQuestion].map((answer) => (
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
	};
}

export default Questions;
