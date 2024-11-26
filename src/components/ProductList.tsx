import { useEffect, useState } from "react";

import "./ProductList.css";

import type Product from "../type/Product";
import Card from "./Card";

function ProductList() {
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
					<Card product={product} />
				</div>
			))}
		</div>
	);
}

export default ProductList;
