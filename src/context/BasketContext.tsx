import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode } from "react";
import type Product from "../type/Product";

interface BasketContext {
	basket: Product[] | [];
	setBasket: Dispatch<React.SetStateAction<Product[] | []>>;
}

const BasketContext = createContext<BasketContext>({
	basket: [],
	setBasket: () => [],
});

export function BasketProvider({ children }: { children: ReactNode }) {
	const [basket, setBasket] = useState<Product[]>([]);

	return (
		<BasketContext.Provider value={{ basket, setBasket }}>
			{children}
		</BasketContext.Provider>
	);
}

export const useBasket = () => {
	return useContext(BasketContext);
};

export default BasketContext;
