import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";
import Root from "./router";
import { AnswersProvider } from "./context/AnswersContext.tsx";
import { WishListProvider } from "./context/WishListContext.tsx";

createRoot(document.getElementById("root") || document.body).render(
	<StrictMode>
		<SelectedProductProvider>
			<AnswersProvider>
				<WishListProvider>
					<Root />
				</WishListProvider>
			</AnswersProvider>
		</SelectedProductProvider>
	</StrictMode>,
);
