import { useEffect, useState } from "react";
import "./ProductList.css";
import { useSelectedProduct } from "../context/SelectedProductContext";
import type Product from "../type/Product";

function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const { setSelectedProduct } = useSelectedProduct();

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
		<div>
			<div className="cards">
				{products.length === 0 ? (
					<p>
						Hélas, mes talents de génie ne suffisent pas cette fois-ci. Aucun
						produit ne correspond à vos désirs.
					</p>
				) : (
					products.map((product) => (
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
					))
				)}
			</div>
		</div>
	);
}

export default ProductList;
