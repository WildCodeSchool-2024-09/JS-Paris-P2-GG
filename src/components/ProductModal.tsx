import type Product from "../type/Product";
import "./ProductModal.css";

interface ProductModalProps {
	product: Product | null;
	setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

function ProductModal({ product, setSelectedProduct }: ProductModalProps) {
	const closeModal = () => {
		setSelectedProduct(null);
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<button type="button" className="close" onClick={closeModal}>
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
