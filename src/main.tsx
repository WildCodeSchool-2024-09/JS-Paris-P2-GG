import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BasketProvider } from "./context/BasketContext.tsx";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";

createRoot(document.getElementById("root") || document.body).render(
	<SelectedProductProvider>
		<BasketProvider>
			<App />
		</BasketProvider>
	</SelectedProductProvider>,
);
