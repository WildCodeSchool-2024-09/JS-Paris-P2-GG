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

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products.slice(0, 5));
			});
	}, []);

	return (
		<div className="cards">
			{products.map((product) => (
				<div key={product.id} className="product-card">
					<img src={product.thumbnail} alt={product.title} />
					<h4>{product.title}</h4>
					<div className="price-badge">€{product.price.toFixed(2)}</div>
				</div>
			))}
		</div>
	);
};

export default Cards;
