import { useEffect, useState } from "react";
import "./Suggestions.css";
import { useSelectedProduct } from "../context/SelectedProductContext";
import type Product from "../type/Product";

interface ImagesState {
	[key: number]: string;
}

function Suggestions() {
	const [products, setProducts] = useState<Product[]>([]);
	const excludedIds = [167];
	const { setSelectedProduct } = useSelectedProduct();
	const [images, setImages] = useState<ImagesState>({});

	useEffect(() => {
		fetch("https://dummyjson.com/products?sortBy=title&order=asc")
			.then((res) => res.json())
			.then((data) => {
				const filteredProducts = data.products.filter(
					(product: Product) => !excludedIds.includes(product.id),
				);

				if (filteredProducts.length < 4) {
					const additionalProduct = data.products.find(
						(product: Product) => !excludedIds.includes(product.id),
					);
					if (additionalProduct) {
						filteredProducts.push(additionalProduct);
					}
				}

				setProducts(filteredProducts.slice(0, 4));
			});
	}, []);

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
		<div className="suggestions">
			<h1>
				Voici des merveilles, à peine plus coûteuses, mais qui pourraient
				enchanter tes souhaits
			</h1>

			<div className="suggestions-container">
				{products.map((product) => (
					<div key={product.id} className="suggestion-card">
						<img src={product.thumbnail} alt={product.title} />
						<h4>{product.title}</h4>
						<div className="price-wish-block">
							<p className="product-price">{product.price}€</p>
							<button
								type="button"
								className="wishlist-button"
								onClick={() => changeImage(product.id)}
								onKeyDown={(event) => handleKeyDown(event, product.id)}
								tabIndex={0}
							>
								<img
									src={
										images[product.id] ||
										"src/assets/magic-lamp-yellowborder.png"
									}
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
		</div>
	);
}

export default Suggestions;
