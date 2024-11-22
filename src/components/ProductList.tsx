import { useEffect, useState } from "react";

import "./ProductList.css";

import { useSelectedProduct } from "../context/SelectedProductContext";

import type Product from "../type/Product";

function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const { setSelectedProduct } = useSelectedProduct();

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

export default ProductList;
