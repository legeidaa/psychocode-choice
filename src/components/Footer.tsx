import { FC } from "react";
import { Link } from "react-router-dom";
import TelegramIcon from "../assets/img/telegram.svg?react";
import WebsiteIcon from "../assets/img/web.svg?react";
import Logo from "../assets/img/logo.png"

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img className="footer__logo-img"src={Logo} alt="Логотип" />
            </div>
            <div className="footer__text-wrapper">
                <p className="footer__text">
                    Psychocode ® Все права защищены. Копирование преследуется по
                    закону. 
                </p>
                <Link to="/donate" className="footer__text-link" target="_blank">
                    Поддержать проект
                </Link>
            </div>
            <div className="footer__links">
                <a
                    className="footer__link"
                    href="https://click.tgtrack.ru/6842309ebe3c9"
                    target="_blank"
                >
                   <TelegramIcon />
                </a>
                <a
                    className="footer__link"
                    href="https://psychocode.ru/?utm_source=choice&utm_medium=web&utm_campaign=first"
                    target="_blank"
                >
                    <WebsiteIcon />
                </a>
            </div>
        </footer>
    );
};
