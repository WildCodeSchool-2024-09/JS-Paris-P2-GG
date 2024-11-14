import "./App.css";
import Recap from "./components/Recap";
import "./components/Recap.css";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Suggestions from "./components/Suggestions";

function App() {
	return (
		<>
			<Recap />
			<Cards />
			<Suggestions />
			<Categories />
		</>
	);
}

export default App;
