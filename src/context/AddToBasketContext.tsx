import { createContext, useContext, useState } from "react";

const AddToBasketContext = createContext(null);

export function AddToBasketProvider({ children }) {
	const [addBasket, setAddToBasket] = useState([]);

	return (
		<AddToBasketContext.Provider value={{ addBasket, setAddToBasket }}>
			{children}
		</AddToBasketContext.Provider>
	);
}

export const useBasket = () => {
	return useContext(AddToBasketContext);
};

// rename basket
