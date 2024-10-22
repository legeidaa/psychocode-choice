import { FC } from "react";
import { Link } from "react-router-dom";

export const ErrorPage: FC = () => {
    return (
        <div className="page-not-found">
            <h1 className="not-found-title">404</h1>
            <Link className="btn" to="/">Вернуться на главную</Link>
        </div>
    );
}