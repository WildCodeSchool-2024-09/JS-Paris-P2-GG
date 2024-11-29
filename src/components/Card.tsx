import { useState } from "react";
import "./Card.css";
import lampYellow from "../assets/magic-lamp-yellow.png";
import lampBorder from "../assets/magic-lamp-yellowborder.png";
import { useSelectedProduct } from "../context/SelectedProductContext";
import { useWishList } from "../context/WishListContext";
import type Product from "../type/Product";

interface CardProps {
	product: Product;
}

interface ImagesState {
	[key: number]: string;
}

function Card({ product }: CardProps) {
	const { setSelectedProduct } = useSelectedProduct();
	const [images, setImages] = useState<ImagesState>({});
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
	function addToWishList(produit: Product) {
		setWishList((prevState) => {
			const isInWishList = prevState.some((item) => item.id === produit.id);
			return isInWishList
				? prevState.filter((item) => item.id !== produit.id)
				: [...prevState, produit];
		});
	}

	return (
		<div className="cards">
			<img
				className="product-image"
				src={product.thumbnail}
				alt={product.title}
			/>
			<h4 className="product-name">{product.title}</h4>
			<div className="price-wish-block">
				<p className="product-price">{product.price} €</p>
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
			<button
				type="button"
				className="modal-button"
				onClick={() => setSelectedProduct(product)}
			>
				<p className="button-text">Plus de détail</p>
			</button>
		</div>
	);
}

export default Card;
