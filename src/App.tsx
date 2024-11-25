import { Outlet } from "react-router-dom";
import { AnswersProvider } from "./context/AnswersContext"; // Importe AnswersProvider
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

function App() {
	return (
		<AnswersProvider value={}>
			<NavBar />
			<Outlet />
			<Footer />
		</AnswersProvider>
	);
}

export default App;
