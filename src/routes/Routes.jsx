import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Clothes from "../pages/Clothes";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/clothes",
                element: <Clothes />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    }
])

export default routes;