import type React from "react";
import { useState } from "react";
import "./Categories.css";

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

const categoryTranslations: { [key: string]: string } = {
	smartphones: "Smartphones",
	laptops: "Ordinateurs Portables",
	fragrances: "Parfums",
	"skin-care": "Soins de la peau",
	"home-decoration": "Décoration",
	beauty: "Beauté",
	furniture: "Meubles",
	"kitchen-accessories": "Accessoires de cuisine",
	"mens-shirts": "Hauts homme",
	"mens-shoes": "Chaussures homme",
	"mens-watches": "Montres homme",
	"mobile-accessories": "Accessoire de téléphone",
	motorcycle: "Moto",
	"sports-accessories": "Accessoires de sport",
	sunglasses: "Lunettes de soleil",
	tablets: "Tablettes",
	tops: "Hauts femmes",
	"womens-bags": "Sacs femme",
	"womens-dresses": "Robes femme",
	"womens-jewellery": "Bijoux femme",
	"womens-shoes": "Chaussures femmes",
	"womens-watches": "Montres femme",
};

const translateCategory = (category: string): string => {
	return categoryTranslations[category] || category;
};

const Categories: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [categories, setCategories] = useState<string[]>([]);
	const [categoryData, setCategoryData] = useState<CategoryData | null>(null);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);

		if (!isOpen) {
			fetch("https://dummyjson.com/products/category-list")
				.then((res) => res.json())
				.then((data) => {
					const filteredCategories = data.filter(
						(category: string) => category !== "groceries",
					);
					setCategories(filteredCategories);
				});
		} else {
			setCategoryData(null);
		}
	};

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
			.catch((error) => console.error("Error fetching category data:", error));
	};

	return (
		<div className="categories">
			<p className="above-button-text">
				Mes propositions ne t’enchantent pas ? <br /> Peut-être qu’un petit tour
				par catégorie te révélera un vœu à ta mesure !
			</p>
			<button className="accordion" type="button" onClick={toggleAccordion}>
				Catégories
			</button>
			{isOpen && (
				<div className="accordion-content">
					{categories.length > 0 ? (
						<ul>
							{categories.map((category) => (
								<li
									key={category}
									className="category-item"
									onClick={() => fetchCategoryData(category)}
									onKeyUp={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											fetchCategoryData(category);
										}
									}}
								>
									{translateCategory(category)}
								</li>
							))}
						</ul>
					) : (
						<p>Loading categories...</p>
					)}
				</div>
			)}

			{isOpen && categoryData && (
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
