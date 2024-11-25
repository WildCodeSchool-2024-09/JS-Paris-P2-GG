import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./pages/Intro";
import Questions from "./pages/Questions";
import Resultats from "./pages/resultats";
import App from "./App";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Intro onComplete={() => {}} />,
			},
			{
				path: "/questions",
				element: <Questions onComplete={() => {}} />,
			},
			{
				path: "/resultats",
				element: <Resultats />,
			},
		],
	},
]);

function Root() {
	return <RouterProvider router={router} />;
}

export default Root;
