import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import { TimerPage } from "../pages/timer";

export const AppRouter = () => {
	const routes: RouteObject = {
		path: "/",
		element: TimerPage(),
	};

	const router = createBrowserRouter([routes]);
	return RouterProvider({ router });
};
