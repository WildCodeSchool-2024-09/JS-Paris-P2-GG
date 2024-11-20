import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import ProductModal from "./components/ProductModal";
import Recap from "./components/Recap";
import Suggestions from "./components/Suggestions";
import Footer from "./components/footer";

import type Product from "./type/Product";

function App() {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	return (
		<>
			<NavBar />
			<Recap />
			<Cards setSelectedProduct={setSelectedProduct} />
			<Suggestions setSelectedProduct={setSelectedProduct} />
			{selectedProduct ? (
				<ProductModal
					product={selectedProduct}
					setSelectedProduct={setSelectedProduct}
				/>
			) : (
				<></>
			)}
			<Categories />
			<Footer />
		</>
	);
}

export default App;
