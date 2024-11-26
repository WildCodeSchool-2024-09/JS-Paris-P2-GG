import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";

createRoot(document.getElementById("root") || document.body).render(
	<SelectedProductProvider>
		<App />
	</SelectedProductProvider>,
);
