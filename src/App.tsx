import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Recap from "./components/Recap";
import Suggestions from "./components/Suggestions";
import Footer from "./components/footer";
import Intro from "./pages/Intro";
import Questions from "./pages/Questions";

function App() {
	const [showIntro, setShowIntro] = useState(true);
	const [showQuestions, setShowQuestions] = useState(false);

	const handleIntroComplete = () => {
		setShowIntro(false);
		setShowQuestions(true);
	};

	const handleQuestionsComplete = () => setShowQuestions(false);

	return (
		<>
			<NavBar />
			{showIntro ? (
				<Intro onComplete={handleIntroComplete} />
			) : showQuestions ? (
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
