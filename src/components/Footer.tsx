import { FC } from "react";
import { Link } from "react-router-dom";

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
                    <svg
                        id="Bold"
                        enableBackground="new 0 0 24 24"
                        height="512"
                        viewBox="0 0 24 24"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
                <a
                    className="footer__link"
                    href="https://psychocode.ru/?utm_source=choice&utm_medium=web&utm_campaign=first"
                    target="_blank"
                >
                    <svg
                        id="Layer_3"
                        height="512"
                        viewBox="0 0 32 32"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 3"
                    >
                        <path
                            d="m21.386 10c-1.055-4.9-3.305-8-5.386-8s-4.331 3.1-5.386 8z"
                            fill="currentColor"
                        />
                        <path
                            d="m10 16a30.013 30.013 0 0 0 .267 4h11.466a30.013 30.013 0 0 0 .267-4 30.013 30.013 0 0 0 -.267-4h-11.466a30.013 30.013 0 0 0 -.267 4z"
                            fill="currentColor"
                        />
                        <path
                            d="m10.614 22c1.055 4.9 3.305 8 5.386 8s4.331-3.1 5.386-8z"
                            fill="currentColor"
                        />
                        <path
                            d="m23.434 10h6.3a15.058 15.058 0 0 0 -10.449-8.626c1.897 1.669 3.385 4.755 4.149 8.626z"
                            fill="currentColor"
                        />
                        <path
                            d="m30.453 12h-6.7a32.332 32.332 0 0 1 .247 4 32.332 32.332 0 0 1 -.248 4h6.7a14.9 14.9 0 0 0 0-8z"
                            fill="currentColor"
                        />
                        <path
                            d="m19.285 30.626a15.058 15.058 0 0 0 10.451-8.626h-6.3c-.766 3.871-2.254 6.957-4.151 8.626z"
                            fill="currentColor"
                        />
                        <path
                            d="m8.566 22h-6.3a15.058 15.058 0 0 0 10.451 8.626c-1.899-1.669-3.387-4.755-4.151-8.626z"
                            fill="currentColor"
                        />
                        <path
                            d="m12.715 1.374a15.058 15.058 0 0 0 -10.451 8.626h6.3c.766-3.871 2.254-6.957 4.151-8.626z"
                            fill="currentColor"
                        />
                        <path
                            d="m8 16a32.332 32.332 0 0 1 .248-4h-6.7a14.9 14.9 0 0 0 0 8h6.7a32.332 32.332 0 0 1 -.248-4z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>
        </footer>
    );
};
