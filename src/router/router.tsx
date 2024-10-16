import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { DonatePage } from "../pages/MainPage/DonatePage";
import { ResultsPage } from "../pages/MainPage/ResultsPage";
import { ErrorPage } from "../pages/MainPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/results",
        element: <ResultsPage/>,
    },
    {
        path: "/donate",
        element: <DonatePage />,
    }
]);
