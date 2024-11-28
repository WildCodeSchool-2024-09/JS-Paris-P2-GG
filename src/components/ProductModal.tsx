import type Product from "../type/Product";
import "./ProductModal.css";
import { useState } from "react";
import { useSelectedProduct } from "../context/SelectedProductContext";
import { useWishList } from "../context/WishListContext";

interface ProductModalProps {
	product: Product;
}

interface ImagesState {
	[key: number]: string;
}

function ProductModal({ product }: ProductModalProps) {
	const { setSelectedProduct } = useSelectedProduct();
	const [images, setImages] = useState<ImagesState>({});
	const { setWishList } = useWishList();
	const changeImage = (productId: number) => {
		setImages((prevImages) => {
			const currentImage =
				prevImages[productId] || "src/assets/magic-lamp-yellowborder.png";
			const newImage =
				currentImage === "src/assets/magic-lamp-yellowborder.png"
					? "src/assets/magic-lamp_yellow.png"
					: "src/assets/magic-lamp-yellowborder.png";
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
	function addToWishList(produit: Product) {
		setWishList((prevState) => {
			const isInWishList = prevState.some((item) => item.id === produit.id);
			return isInWishList
				? prevState.filter((item) => item.id !== produit.id)
				: [...prevState, produit];
		});
	}
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
						onClick={() => {
							changeImage(product.id);
							addToWishList(product);
						}}
						onKeyDown={(event) => handleKeyDown(event, product.id)}
						tabIndex={0}
					>
						<img
							src={
								images[product.id] || "src/assets/magic-lamp-yellowborder.png"
							}
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
