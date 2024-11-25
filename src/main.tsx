import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";
import Root from "./Router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SelectedProductProvider>
			<Root />
		</SelectedProductProvider>
	</StrictMode>,
);
