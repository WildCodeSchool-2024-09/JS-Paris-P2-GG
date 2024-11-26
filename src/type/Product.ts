export default interface Product {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
	category: string;
	slug?: string;
	description: string;
}
