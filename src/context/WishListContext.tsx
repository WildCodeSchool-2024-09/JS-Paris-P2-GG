import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode } from "react";
import type Product from "../type/Product";

interface WishListContext {
	WishList: Product[] | [];
	setWishList: Dispatch<React.SetStateAction<Product[] | []>>;
}
const WishListContext = createContext<WishListContext>({
	WishList: [],
	setWishList: () => [],
});

export function WishListProvider({ children }: { children: ReactNode }) {
	const [WishList, setWishList] = useState<Product[]>([]);
	return (
		<WishListContext.Provider value={{ WishList, setWishList }}>
			{children}
		</WishListContext.Provider>
	);
}
export const useWishList = () => {
	return useContext(WishListContext);
};
