import React, { useState, useEffect } from "react";
import "./Categories.css";

const Categories: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [categories, setCategories] = useState<string[]>([]);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);

		if (!isOpen) {
			fetch("https://dummyjson.com/products/category-list")
				.then((res) => res.json())
				.then((data) => setCategories(data));
		}
	};

	return (
		<div className="categories">
			<p className="above-button-text">
				Voici des merveilles, à peine plus coûteuses,
				<br /> mais qui pourraient enchanter tes souhaits
			</p>
			<button className="accordion" onClick={toggleAccordion}>
				Categories
			</button>
			{isOpen && (
				<div className="accordion-content">
					{categories.length > 0 ? (
						<ul>
							{categories.map((category, index) => (
								<li key={index}>{category}</li>
							))}
						</ul>
					) : (
						<p>Loading categories...</p>
					)}
				</div>
			)}
		</div>
	);
};

export default Categories;
