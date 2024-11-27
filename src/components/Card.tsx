import { useState } from "react";

import "./Card.css";

import { useSelectedProduct } from "../context/SelectedProductContext";

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
					onClick={() => changeImage(product.id)}
					onKeyDown={(event) => handleKeyDown(event, product.id)}
					tabIndex={0}
				>
					<img
						src={images[product.id] || "src/assets/magic-lamp-yellowborder.png"}
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
