import Recap from "../components/Recap";
import ProductList from "../components/ProductList";
import Suggestions from "../components/Suggestions";
import ProductModal from "../components/ProductModal";
import Categories from "../components/Categories";
import { useState } from "react";
import { useSelectedProduct } from "../context/SelectedProductContext";
function Resultats() {
	const { selectedProduct, setSelectedProduct } = useSelectedProduct();

	return (
		<>
			<Recap />
			<ProductList />
			<Suggestions />
			{selectedProduct ? <ProductModal product={selectedProduct} /> : <></>}
			<Categories />
		</>
	);
}

export default Resultats;
