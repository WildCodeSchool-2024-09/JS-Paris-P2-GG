import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Intro from "./pages/Intro";
import Questions from "./pages/Questions";
import Resultats from "./pages/resultats";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Intro />,
			},
			{
				path: "/questions",
				element: <Questions />,
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
