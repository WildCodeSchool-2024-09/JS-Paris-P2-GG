import { useEffect, useState } from "react";

import "./ProductList.css";

import { useSelectedProduct } from "../context/SelectedProductContext";

import type Product from "../type/Product";

interface ImagesState {
	[key: number]: string;
}

function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const { setSelectedProduct } = useSelectedProduct();
	const [images, setImages] = useState<ImagesState>({});

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
					<img src={product.thumbnail} alt={product.title} />
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
								src={images[product.id] || "src\\assets\\magic-lamp.png"}
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
			))}
		</div>
	);
}

export default ProductList;
