import { FC, useState } from "react";
import { Footer } from "../components/Footer";
import { Title } from "../components/Title";
import { Link } from "react-router-dom";
import { DonateModal } from "../components/DonateModal";

export const DonatePage: FC = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <main>
                <div className="container">
                    <Title size="normal" tag="h1" />
                    <div className="description">
                        <p className="description__p">
                            Сервис разрабатывается и улучшается с любовью для
                            вас!
                        </p>
                    </div>
                    <div className="text">
                        <p className="text__p">
                            Как коуч и клинический психолог, я часто даю эту
                            технику своим клиентам. Она помогает им вдуматься и
                            провести осознанный анализ своих за и против на
                            любой точке выбора: малой повседневной или
                            глобальной решающей.{" "}
                        </p>
                        <p className="text__p">
                            А как IT-предприниматель, решила облачить это в
                            удобный формат сервиса и предоставить возможность
                            пользоваться бесплатно всем желающим, понимая, как
                            это бывает важно.
                        </p>
                        <p className="text__p">
                            Этот сервис абсолютно бесплатный и держится лишь на
                            моем энтузиазме и желании облегчить людям процесс
                            принятия решений. Чтобы он исправно работал, я плачу
                            за сервера и техническую поддержку.
                        </p>
                        <p className="text__p">
                            Ваши пожертвования позволяют сервису развиваться, а
                            также создавать новые удобные и полезные продукты.
                        </p>
                    </div>

                    <div className="btn-wrapper btn-wrapper_centered btn-wrapper-donate">
                        <Link to={"/"} className="btn">
                            Вернуться
                        </Link>
                        <button onClick={openModal} className="btn">
                            Пожертвовать
                        </button>
                        <Link
                            to={
                                "https://psychocode.ru/?utm_source=choice&utm_medium=web&utm_campaign=first"
                            }
                            target="_blank"
                            className="btn"
                        >
                            Подробнее
                        </Link>
                    </div>
                    <DonateModal closeFunc={closeModal} isOpen={modalIsOpen} />
                </div>
            </main>
            <Footer />
        </>
    );
};
