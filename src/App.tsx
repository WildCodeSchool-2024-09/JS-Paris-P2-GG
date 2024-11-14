import "./App.css";
import Recap from "./components/Recap";
import "./components/Recap.css";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Suggestions from "./components/Suggestions";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<NavBar />
			<Recap />
			<Cards />
			<Suggestions />
			<Categories />
			<Footer />
		</>
	);
}

export default App;
