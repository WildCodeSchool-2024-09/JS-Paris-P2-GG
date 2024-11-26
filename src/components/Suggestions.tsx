import { useEffect, useState } from "react";
import "./Suggestions.css";
import { useSelectedProduct } from "../context/SelectedProductContext";
import type Product from "../type/Product";

interface ImagesState {
	[key: number]: string;
}

interface SuggestionsProps {
	budget: number | null;
	answers: string[];
}

function Suggestions({ budget, answers }: SuggestionsProps) {
	const [products, setProducts] = useState<Product[]>([]);
	const { setSelectedProduct } = useSelectedProduct();
	const [images, setImages] = useState<ImagesState>({});

	type Gender = "Homme" | "Femme" | "Indifférent";
	type Interest = "Beauté" | "Maison" | "Mode" | "Multimedia" | "Surprends moi";

	const categoryMapping: Record<Gender, string[]> = {
		Homme: [
			"mens-shoes",
			"mens-shirts",
			"mens-watches",
			"sunglasses",
			"home-decoration",
			"kitchen-accessories",
			"laptops",
			"mobile-accessories",
			"smartphones",
			"sports-accessories",
			"tablets",
		],
		Femme: [
			"beauty",
			"fragrances",
			"skin-care",
			"sunglasses",
			"tops",
			"womens-bags",
			"womens-dresses",
			"womens-jewellery",
			"womens-shoes",
			"womens-watches",
			"home-decoration",
			"kitchen-accessories",
			"laptops",
			"mobile-accessories",
			"smartphones",
			"tablets",
		],
		Indifférent: [
			"beauty",
			"fragrances",
			"skin-care",
			"sunglasses",
			"tops",
			"womens-bags",
			"womens-dresses",
			"womens-jewellery",
			"womens-shoes",
			"womens-watches",
			"mens-shoes",
			"mens-shirts",
			"mens-watches",
			"sports-accessories",
			"home-decoration",
			"kitchen-accessories",
			"laptops",
			"mobile-accessories",
			"smartphones",
			"tablets",
		],
	};

	const interestMapping: Record<Interest, string[]> = {
		Beauté: ["beauty", "fragrances", "skin-care"],
		Mode: [
			"mens-shoes",
			"mens-shirts",
			"mens-watches",
			"sunglasses",
			"tops",
			"womens-bags",
			"womens-dresses",
			"womens-jewellery",
			"womens-shoes",
			"womens-watches",
		],
		Multimedia: [
			"laptops",
			"mobile-accessories",
			"smartphones",
			"sports-accessories",
			"tablets",
		],
		Maison: ["furniture", "home-decoration", "kitchen-accessories"],
		"Surprends moi": [],
	};

	useEffect(() => {
		const limit = 194;
		const skip = 0;

		fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
			.then((res) => res.json())
			.then((data) => {
				let filteredProducts = data.products;

				if (budget !== null) {
					filteredProducts = filteredProducts.filter(
						(product: Product) => product.price <= budget,
					);
				}

				if (
					answers[0] &&
					["Homme", "Femme", "Indifférent"].includes(answers[0])
				) {
					const selectedCategories =
						categoryMapping[answers[0] as Gender] || [];
					filteredProducts = filteredProducts.filter((product: Product) => {
						const productCategory =
							product.category?.trim().toLowerCase() || "";
						return selectedCategories.some(
							(category) => category.toLowerCase() === productCategory,
						);
					});
				}

				if (answers[1] && interestMapping[answers[1] as Interest]) {
					const selectedInterestCategories =
						interestMapping[answers[1] as Interest] || [];
					if (selectedInterestCategories.length > 0) {
						filteredProducts = filteredProducts.filter((product: Product) => {
							const productCategory =
								product.category?.trim().toLowerCase() || "";
							return selectedInterestCategories.some(
								(category) => category.toLowerCase() === productCategory,
							);
						});
					}
				}

				if (answers[1] === "Surprends moi") {
					filteredProducts = filteredProducts.filter((product: Product) => {
						const productCategory =
							product.category?.trim().toLowerCase() || "";
						const isGenderMatched =
							categoryMapping[answers[0] as Gender]?.some(
								(category) => category.toLowerCase() === productCategory,
							) || false;
						return isGenderMatched;
					});
				}

				const shuffledProducts = shuffleArray(filteredProducts);

				setProducts(shuffledProducts.slice(6, 10));
			})
			.catch((error) => console.error("Error fetching products:", error));
	}, [budget, answers]);

	function shuffleArray(array: Product[]) {
		return array.sort(() => Math.random() - 0.5);
	}

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
			<h1>Un autre tour de magie pour t'offrir encore plus de choix !</h1>

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
