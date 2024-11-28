import { createContext, useContext, useState } from "react";

const BasketContext = createContext(null);

export function BasketProvider({ children }) {
	const [basket, setBasket] = useState([]);

	return (
		<BasketContext.Provider value={{ basket, setBasket }}>
			{children}
		</BasketContext.Provider>
	);
}

export const useBasket = () => {
	return useContext(BasketContext);
};
