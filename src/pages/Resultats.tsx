import Recap from "../components/Recap";
import ProductList from "../components/ProductList";
import Suggestions from "../components/Suggestions";
import ProductModal from "../components/ProductModal";
import Categories from "../components/Categories";
import { useState } from "react";
import { useSelectedProduct } from "../context/SelectedProductContext";
import { useAnswers } from "../context/AnswersContext";
interface ResultatsProps {
	answers: string[];
	budget: number | null;
}
function Resultats() {
	const { answers, setAnswers } = useAnswers();
	const { budget, setBudget } = useAnswers();
	const { selectedProduct, setSelectedProduct } = useSelectedProduct();

	return (
		<>
			<Recap answers={[]} budget={0} />
			<ProductList answers={[]} budget={0} />
			<Suggestions />
			{selectedProduct ? <ProductModal product={selectedProduct} /> : <></>}
			<Categories />
		</>
	);
}

export default Resultats;
