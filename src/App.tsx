import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import ProductModal from "./components/ProductModal";
import Recap from "./components/Recap";
import Suggestions from "./components/Suggestions";
import Footer from "./components/footer";

import type Product from "./type/Product";
import { useSelectedProduct } from "./context/SelectedProductContext";

function App() {
	const {selectedProduct, setSelectedProduct} = useSelectedProduct();
	return (
		<>
			<NavBar />
			<Recap />
			<ProductList />
			<Suggestions />
			{selectedProduct ? (
				<ProductModal
					product={selectedProduct}
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
