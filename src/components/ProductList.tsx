import { useEffect, useState } from "react";
import "./ProductList.css";

import type Product from "../type/Product";
import Card from "./Card";

function ProductList({ budget, answers }: ProductListProps) {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const limit = 194;
		const skip = 0;

		fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products.slice(0, 5));
			});
	}, []);

	return (
		<div className="cards">
			{products.map((product) => (
				<div key={product.id} className="product-card">
					<Card product={product} />
				</div>
			))}
		</div>
	);
}

export default ProductList;
