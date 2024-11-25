import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<SelectedProductProvider>
		<App />
	</SelectedProductProvider>,
);
