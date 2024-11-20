import { useEffect, useState } from "react";
import "./Cards.css";
import type Product from "../type/Product";

interface CardsType {
	setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

function Cards({ setSelectedProduct }: CardsType) {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products.slice(0, 5));
			});
	}, []);

	return (
		<div>
			<div className="cards">
				{products.map((product) => (
					<button
						type="button"
						key={product.id}
						className="product-card"
						onClick={() => setSelectedProduct(product)}
					>
						<img src={product.thumbnail} alt={product.title} />
						<h4>{product.title}</h4>
						<p>{product.price} €</p>
					</button>
				))}
			</div>
		</div>
	);
}

export default Cards;
