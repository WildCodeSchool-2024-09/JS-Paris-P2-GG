import "./App.css";
import { useState } from "react";
import Cards from "./Components/cards";
import games from "./Components/data";
fetch("https://dummyjson.com/products")
	.then((res) => res.json())
	.then(console.log);
function App() {
	const [filteredGames, setFilteredGames] = useState(games);

	return (
		<>
			<div className="allcards">
				{filteredGames.map((game) => (
					<Cards dataGame={game} key={game.id} />
				))}
			</div>
		</>
	);
}

export default App;
