import { motion } from "motion/react";
import { useState } from "react";
import "./Questions.css";

interface QuestionsProps {
	onComplete: (answers: string[], budget: number) => void;
}

function Questions({ onComplete }: QuestionsProps) {
	const [indexQuestion, setIndexQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<string[]>(["", ""]);
	const [sliderValue, setSliderValue] = useState<number>(50);

	const questions = [
		"Le cadeau est pour qui?",
		"Choisir un centre d'intérêt ?",
		"Quel est votre budget?",
		"Vos désirs sont des ordres. Voici mes suggestions de cadeaux.",
	];

	const numberQuestion = indexQuestion + 1;

	const answers = [
		["Femme", "Homme", "Indifférent"],
		["Beauté", "Maison", "Mode", "Multimedia", "Surprends moi"],
		[],
		["Réveler mes désirs"],
	];

	const handleSelectAnswer = (answer: string) => {
		if (indexQuestion < 2) {
			setSelectedAnswers((prev) => {
				const updatedAnswers = [...prev];
				updatedAnswers[indexQuestion] = answer;
				return updatedAnswers;
			});
		} else if (indexQuestion === 3 && answer === "Réveler mes désirs") {
			onComplete(selectedAnswers, sliderValue);
		}

		setIndexQuestion((prev) => prev + 1);
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
									updatedAnswers[indexQuestion] = `${sliderValue}€`;
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
				) : answers[indexQuestion]?.length > 0 ? (
					<div className="answer-options">
						{answers[indexQuestion].map((answer) => (
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
