import { createContext, useContext, useState } from "react";
import type Product from "../type/Product";
import type { ReactNode } from "react";

interface SelectedProductType {
	selectedProduct: Product | null;
	setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const SelectedProductContext = createContext<SelectedProductType | null>(null);

export function SelectedProductProvider({ children }: {children: ReactNode}) {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	return (
		<SelectedProductContext.Provider
			value={{ selectedProduct, setSelectedProduct }}
		>
			{children}
		</SelectedProductContext.Provider>
	);
}

export const useSelectedProduct = () => {
	const context = useContext(SelectedProductContext);
	if (context == null) {
	  throw new Error("useSelectedProduct must be used within a SelectedProductProvider");
	}
	return context;
};
