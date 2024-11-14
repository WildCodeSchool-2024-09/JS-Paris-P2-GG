import "./App.css";
import Recap from "./components/Recap";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";
import ProductSheet from "./components/ProductSheet";


function App() {
	return (
		<>
			<NavBar />
			<Recap />
			<Cards />
			<ProductSheet />
			<Suggestions />
			<Categories />
			
			<Footer />
		</>
	);
}

export default App;
