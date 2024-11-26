import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SelectedProductProvider>
			<App />
		</SelectedProductProvider>,
	</StrictMode>
);
