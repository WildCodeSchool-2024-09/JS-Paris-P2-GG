import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Intro from "./pages/Intro";
import Questions from "./pages/Questions";
import Resultats from "./pages/resultats";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import ProductModal from "./components/ProductModal";
import Recap from "./components/Recap";
import Suggestions from "./components/Suggestions";
import Footer from "./components/footer";
import type Product from "./type/Product";
import { useSelectedProduct } from "./context/SelectedProductContext";

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

	// const { selectedProduct, setSelectedProduct } = useSelectedProduct();
	return (
		<>
			<NavBar />
			{showIntro ? (
				<Intro onComplete={handleIntroComplete} />
			) : showQuestions ? (
				<Questions
					onComplete={(answers, budget) =>
						handleQuestionsComplete(answers, budget)
					}
				/>
			) : (
				<Resultats />
			)}
			{!showIntro && <Footer />}
			<Outlet />
		</>
	);
}

export default App;
