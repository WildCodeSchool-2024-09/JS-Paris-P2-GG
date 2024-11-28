import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import ProductModal from "../components/ProductModal";
import Recap from "../components/Recap";
import Suggestions from "../components/Suggestions";
import { useSelectedProduct } from "../context/SelectedProductContext";

function Resultats() {
	const { selectedProduct } = useSelectedProduct();

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
