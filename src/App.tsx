import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

function App() {
	return (
		<section>
			<NavBar />
			<div className="cards">
				<img src="src/assets/Lassana-removebg-final.png" alt="Lassana" />
				<h2>Lassana</h2>
				<h3>GG Ca !</h3>
				<p>
					<b>Catégorie :</b> Maison
				</p>
				<p>
					<b>Prix:</b> 1 000 000 €
				</p>
			</div>
			<Footer />
		</section>
	);
}

export default App;
