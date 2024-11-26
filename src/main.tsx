import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SelectedProductProvider } from "./context/SelectedProductContext.tsx";
import Root from "./router";
import { AnswersProvider } from "./context/AnswersContext.tsx";

createRoot(document.getElementById("root") || document.body).render(
	<StrictMode>
		<SelectedProductProvider>
			<AnswersProvider>
				<Root />
			</AnswersProvider>
		</SelectedProductProvider>
	</StrictMode>,
);
