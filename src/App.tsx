import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Recap from "./components/Recap";
import Suggestions from "./components/Suggestions";
import Footer from "./components/footer";
import Questions from "./pages/Questions";

function App() {
	const [showQuestions, setShowQuestions] = useState(true);

	const handleQuestionsComplete = () => setShowQuestions(false);

	return (
		<>
			<NavBar />
			{showQuestions ? (
				<Questions onComplete={handleQuestionsComplete} />
			) : (
				<>
					<Recap />
					<Cards />
					<Suggestions />
					<Categories />
				</>
			)}
			<Footer />
		</>
	);
}

export default App;
