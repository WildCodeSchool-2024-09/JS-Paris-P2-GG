import "./App.css";
import Categories from "./components/Categories";
import Suggestions from "./components/Suggestions";

function App() {
	const name = "toto";
	const text = "Welcome";

	return (
		<>
			<h1>
				Voici des merveilles, à peine plus coûteuses, mais qui pourraient
				enchanter tes souhaits
			</h1>
			{}
			<Suggestions />
			<Categories />
		</>
	);
}

export default App;
