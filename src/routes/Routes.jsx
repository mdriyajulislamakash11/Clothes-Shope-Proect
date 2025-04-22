import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Clothes from "../pages/Clothes";
import ClothesCard from "../components/ClothesCard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("../categories.json"),
                children: [
                    {
                        path: "/cloth/:cloth",
                        element: <ClothesCard />,
                        loader: () => fetch("../clothes.json")
                    },
                    {
                        path: "/",
                        element: <ClothesCard />,
                        loader: () => fetch("../clothes.json")
                    }
                ]
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