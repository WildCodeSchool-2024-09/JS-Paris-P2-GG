import { Outlet } from "react-router-dom";
import { AnswersProvider } from "./context/AnswersContext";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import ResponsiveAlert from './components/ResponsiveAlert';

function App() {
	return (
		<>
		<ResponsiveAlert />
		<AnswersProvider>
			<NavBar />
			<Outlet />
			<Footer />
		</AnswersProvider>
		</>
	);
}

export default App;
