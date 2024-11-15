import type React from "react";
import { useEffect, useState } from "react";
import "./Cards.css";

interface Product {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
}

const Cards: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [images, setImages] = useState<{ [key: number]: string }>({});

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products.slice(0, 5));
			});
	}, []);

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
		<div className="cards">
			{products.map((product) => (
				<div key={product.id} className="product-card">
					<img
						src={product.thumbnail}
						alt={product.title}
						className="product-image"
					/>
					<div className="text-and-wishlist">
						<div className="title-and-price">
							<h4>{product.title}</h4>
							<p>€{product.price}</p>
						</div>
						<button type="button">
							<img
								src={images[product.id] || "src\\assets\\magic-lamp.png"}
								alt="magic lamp"
								className="magic-lamp"
								onClick={() => changeImage(product.id)}
								onKeyDown={(event) => handleKeyDown(event, product.id)}
								tabIndex={0}
							/>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cards;
