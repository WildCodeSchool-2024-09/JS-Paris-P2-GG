import { Outlet } from "react-router-dom";
import { AnswersProvider } from "./context/AnswersContext";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import { useSelectedProduct } from "./context/SelectedProductContext";
import Intro from "./pages/Intro";

function App() {
	const [showIntro, setShowIntro] = useState(true);
	const [showQuestions, setShowQuestions] = useState(false);

	const [answers, setAnswers] = useState<string[]>([]);
	const [budget, setBudget] = useState<number | null>(null);

	const handleIntroComplete = () => {
		setShowIntro(false);
		setShowQuestions(true);
	};

	const handleQuestionsComplete = (
		selectedAnswers: string[],
		budgetValue: number,
	) => {
		setAnswers(selectedAnswers);
		setBudget(budgetValue);
		setShowQuestions(false);
	};

	const { selectedProduct } = useSelectedProduct();
	return (
		<AnswersProvider>
			<NavBar />
			<Outlet />
			<Footer />
		</AnswersProvider>
	);
}

export default App;
