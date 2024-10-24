import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { DonatePage } from "../pages/DonatePage";
import { ResultsPage } from "../pages/ResultsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { QuizPage } from "../pages/QuizPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "quiz",
        element: <QuizPage/>,
    },
    {
        path: "results",
        element: <ResultsPage/>,
    },
    {
        path: "donate",
        element: <DonatePage />,
    }
]);
