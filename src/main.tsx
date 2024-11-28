import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AnswersProvider } from "./context/AnswersContext.tsx";
import { BasketProvider } from "./context/BasketContext.tsx";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";
import { WishListProvider } from "./context/WishListContext.tsx";
import Root from "./router";

createRoot(document.getElementById("root") || document.body).render(
	<StrictMode>
		<SelectedProductProvider>
			<BasketProvider>
				<AnswersProvider>
					<WishListProvider>
						<Root />
					</WishListProvider>
				</AnswersProvider>
			</BasketProvider>
		</SelectedProductProvider>
	</StrictMode>,
);
