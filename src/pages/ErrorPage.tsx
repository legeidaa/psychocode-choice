import { FC } from "react";
import { Link } from "react-router-dom";

export const ErrorPage: FC = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
}