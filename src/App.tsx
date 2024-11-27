import { Outlet } from "react-router-dom";
import { AnswersProvider } from "./context/AnswersContext";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

function App() {
<<<<<<< HEAD
=======
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
>>>>>>> ca877c9aec6b7795fbc3f881ceaf154e3944faa5
	return (
		<AnswersProvider>
			<NavBar />
			<Outlet />
			<Footer />
		</AnswersProvider>
	);
}

export default App;
