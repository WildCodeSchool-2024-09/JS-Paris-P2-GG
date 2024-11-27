import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import Recap from "./components/Recap";
import Suggestions from "./components/Suggestions";
import Footer from "./components/footer";
import { useSelectedProduct } from "./context/SelectedProductContext";
import Intro from "./pages/Intro";
import Questions from "./pages/Questions";

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
				<>
					<Recap answers={answers} budget={budget} />
					<ProductList answers={answers} budget={budget} />
					<Suggestions budget={budget} answers={answers} />
					{selectedProduct ? <ProductModal product={selectedProduct} /> : <></>}
					<Categories />
				</>
			)}
			{!showIntro && <Footer />}
		</>
	);
}

export default App;
