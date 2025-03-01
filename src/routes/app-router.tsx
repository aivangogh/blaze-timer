import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";

export const AppRouter = () => {
  const routes: RouteObject = {
  }
  
  const router = createBrowserRouter([routes])
  return RouterProvider({ router })
};
