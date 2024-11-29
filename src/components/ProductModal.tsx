import type Product from "../type/Product";
import "./ProductModal.css";
import { useContext, useState } from "react";
import lampYellow from "../assets/magic-lamp-yellow.png";
import lampBorder from "../assets/magic-lamp-yellowborder.png";
import BasketContext from "../context/BasketContext";
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
	const { setBasket } = useContext(BasketContext);
	const { setWishList } = useWishList();
	const changeImage = (productId: number) => {
		setImages((prevImages) => {
			const currentImage = prevImages[productId] || lampBorder;
			const newImage = currentImage === lampBorder ? lampYellow : lampBorder;
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

	function addToBasket(product: Product) {
		setBasket((prevState) => {
			const isInBasket = prevState.some((item) => item.id === product.id);
			return isInBasket
				? prevState.filter((item) => item.id !== product.id)
				: [...prevState, product];
		});
	}

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
							src={images[product.id] || lampBorder}
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
					<button
						className="modal-buttons"
						type="button"
						onClick={() => {
							addToBasket(product);
						}}
						onKeyUp={() => {
							addToBasket(product);
						}}
					>
						Ajouter au panier
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductModal;
