import type Product from "../type/Product";
import "./ProductModal.css";
import { useSelectedProduct } from "../context/SelectedProductContext";

interface ProductModalProps {
	product: Product | null;
}

function ProductModal({ product }: ProductModalProps) {
	const { setSelectedProduct } = useSelectedProduct();
	return (
		<div className="modal">
			<div className="modal-content">
				<button type="button" className="close" onClick={() => {
		setSelectedProduct(null)}}>
					X
				</button>
				{product?.thumbnail ? (
					<img src={product.thumbnail} alt={product.title || "Produit"} />
				) : (
					<p>Aucune image disponible</p>
				)}
				<h2>{product?.title || "Produit non disponible"}</h2>
				<p>{product?.price ? `${product.price} €` : "Prix non disponible"}</p>
				<p>{product?.description || "Aucune descirption  disponible"}</p>
				<div className="modal-cta">
					<button
						className="modal-buttons"
						type="button"
						onClick={() =>
							window.open("https://www.leetchi.com/fr/cagnotte/creer")
						}
					>
						Créer une cagnotte
					</button>
					<button className="modal-buttons" type="button">
						Ajouter au panier
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductModal;
