import { FC } from "react";
import { Link } from "react-router-dom";
import Telegram from '../assets/img/telegram.svg';
import Web from '../assets/img/web.svg';

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__text-wrapper">
                <p className="footer__text">
                    Psychocode ® Все права защищены. Копирование преследуется по
                    закону.
                </p>
                <Link to="/donate" className="footer__text-link">
                    Помочь проекту
                </Link>
            </div>
            <div className="footer__links">
            <a
                    className="footer__link"
                    href="https://click.tgtrack.ru/6842309ebe3c9"
                    target="_blank"
                >
                    <img src={Telegram} alt="" />
                </a>
                <a
                    className="footer__link"
                    href="https://psychocode.ru/?utm_source=choice&utm_medium=web&utm_campaign=first"
                    target="_blank"
                >
                    <img src={Web} alt="" />
                </a>
            </div>
        </footer>
    );
};
