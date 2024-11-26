import type React from "react";
import "./Categories.css";
import { useEffect, useState } from "react";

interface Product {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
}

interface CategoryData {
	name: string;
	products: Product[];
}

// Traductions des catégories
const categoryTranslations: { [key: string]: string } = {
	smartphones: "Smartphones",
	laptops: "Ordinateurs portables",
	fragrances: "Parfums",
	"skin-care": "Soins de la peau",
	"home-decoration": "Décoration",
	beauty: "Beauté",
	furniture: "Meubles",
	"kitchen-accessories": "Accessoires de cuisine",
	"mens-shirts": "Hauts homme",
	"mens-shoes": "Chaussures homme",
	"mens-watches": "Montres homme",
	"mobile-accessories": "Accessoires téléphone",
	"sports-accessories": "Accessoires sport",
	sunglasses: "Lunettes de soleil",
	tablets: "Tablettes",
	tops: "Hauts femme",
	"womens-bags": "Sacs femme",
	"womens-dresses": "Robes femme",
	"womens-jewellery": "Bijoux femme",
	"womens-shoes": "Chaussures femme",
	"womens-watches": "Montres femme",
};

const translateCategory = (category: string): string => {
	return categoryTranslations[category] || category;
};

const Categories: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [categories, setCategories] = useState<string[]>([]);
	const [categoryData, setCategoryData] = useState<CategoryData | null>(null);

	useEffect(() => {
		fetch("https://dummyjson.com/products/category-list")
			.then((res) => res.json())
			.then((data) => {
				const filteredCategories = data.filter(
					(category: string) =>
						category !== "groceries" &&
						category !== "motorcycle" &&
						category !== "vehicle",
				);
				setCategories(filteredCategories);
			})
			.catch((error) =>
				console.error("Erreur de récupération des catégories :", error),
			);
	}, []);

	const fetchCategoryData = (category: string) => {
		const apiUrl = `https://dummyjson.com/products/category/${category}`;
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => {
				setCategoryData({
					name: category,
					products: data.products,
				});
			})
			.catch((error) =>
				console.error("Erreur lors de la récupération des produits :", error),
			);
	};

	return (
		<div className="categories">
			<p className="above-button-text">
				Mes propositions ne t’enchantent pas ? <br /> Peut-être qu’un petit tour
				par catégorie te révélera un vœu à ta mesure !
			</p>

			<div className="menu">
				<select
					className="category-menu"
					onChange={(e) => fetchCategoryData(e.target.value)}
				>
					<option value="">Sélectionner une catégorie</option>
					{categories.length > 0 ? (
						categories.map((category) => (
							<option key={category} value={category}>
								{translateCategory(category)}
							</option>
						))
					) : (
						<option>Chargement des catégories...</option>
					)}
				</select>
			</div>

			{categoryData && (
				<div className="category-products">
					<h3>
						Produits dans la catégorie {translateCategory(categoryData.name)} :
					</h3>
					<div className="products-cat">
						{categoryData.products.map((product: Product) => (
							<div key={product.id} className="suggestion-card">
								<img src={product.thumbnail} alt={product.title} />
								<h4>{product.title}</h4>
								<p>€{product.price.toFixed(2)}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Categories;
