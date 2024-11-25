import type Product from "../type/Product";
import "./ProductModal.css";
import { useEffect, useState } from "react";
import { useSelectedProduct } from "../context/SelectedProductContext";

interface ProductModalProps {
	product: Product | null;
}

interface ImagesState {
	[key: number]: string;
}

function ProductModal({ product }: ProductModalProps) {
	const { setSelectedProduct } = useSelectedProduct();
	const [images, setImages] = useState<ImagesState>({});

	const changeImage = (productId: number) => {
		setImages((prevImages) => {
			const currentImage =
				prevImages[productId] || "src\\assets\\magic-lamp.png";
			const newImage =
				currentImage === "src\\assets\\magic-lamp.png"
					? "src\\assets\\magic-lamp_yellow.png"
					: "src\\assets\\magic-lamp.png";
			return {
				...prevImages,
				[productId]: newImage,
			};
		});
	};
	const handleKeyDown = (event: React.KeyboardEvent, productId: number) => {
		if (event.key === "Enter" || event.key === " ") {
			changeImage(productId);
		}
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<button
					type="button"
					className="close"
					onClick={() => {
						setSelectedProduct(null);
					}}
				>
					X
				</button>
				{product?.thumbnail ? (
					<img src={product.thumbnail} alt={product.title || "Produit"} />
				) : (
					<p>Aucune image disponible</p>
				)}
				<h2>{product?.title || "Produit non disponible"}</h2>
				<p className="modal-description">
					{product?.description || "Aucune descirption  disponible"}
				</p>
				<div className="price-wish-block">
					<p className="product-price">
						{product?.price ? `${product.price} €` : "Prix non disponible"}
					</p>
					<button
						type="button"
						className="wishlist-button"
						onClick={() => product && changeImage(product.id)}
						onKeyDown={(event) => product && handleKeyDown(event, product.id)}
						tabIndex={0}
					>
						<img
							src={product ? images[product.id] : "src\\assets\\magic-lamp.png"}
							alt="magic lamp"
							className="magic-lamp"
						/>
					</button>
				</div>
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
