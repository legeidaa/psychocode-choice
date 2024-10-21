import { FC, useCallback, useEffect, useRef } from "react";
import { Title } from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import {
    consNotToDo,
    consToDo,
    isComplete,
    prosNotToDo,
    prosToDo,
    question,
} from "../store/quizDataSelectors";
import { Footer } from "../components/Footer";
import { ResultList } from "../components/ResultList";
import { Choices, resetState, setStep } from "../store/quizDataSlice";
import { useNavigate } from "react-router-dom";
import YellowCheck from "../assets/img/yellow-check.svg?react";
import YellowCross from "../assets/img/yellow-cross.svg?react";
import TelegramIcon from "../assets/img/telegram.svg?react";
import WebsiteIcon from "../assets/img/web.svg?react";
import { toPng } from "html-to-image";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Ya: any;
    }
}

const reduceChoices = (arr: Choices) => {
    return arr.reduce((acc, choice) => {
        if (choice.weight) {
            return acc + choice.weight;
        }
        return acc;
    }, 0);
};

export const ResultsPage: FC = () => {
    const imageRef = useRef(null);
    const questionValue = useSelector(question);
    const prosToDoArr = useSelector(prosToDo);
    const consToDoArr = useSelector(consToDo);
    const prosNotToDoArr = useSelector(prosNotToDo);
    const consNotToDoArr = useSelector(consNotToDo);
    const isQuizComplete = useSelector(isComplete);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getToDoSum = () => {
        return reduceChoices(prosToDoArr) - reduceChoices(consToDoArr);
    };
    const getNotToDoSum = () => {
        return reduceChoices(prosNotToDoArr) - reduceChoices(consNotToDoArr);
    };

    const onAgainBtnClick = () => {
        dispatch(setStep(0));
        dispatch(resetState());
        navigate("/");
    };
    const downloadPng = useCallback(() => {
        if (imageRef.current === null) {
            return;
        }
        toPng(imageRef.current, {
            backgroundColor: "#3A4654",
        })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "psychocode.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [imageRef]);

    const onBackBtnClick = () => {
        navigate("/");
    };

    const onDownloadBtnClick = () => {
        downloadPng();
    };

    useEffect(() => {
        window.Ya.share2("ya-share2", {
            content: {
                url: location.origin,
            },
            theme: {
                services:
                    "messenger,vkontakte,odnoklassniki,telegram,twitter,viber,whatsapp",
                curtain: true,
                popupDirection: "top",
                lang: document.documentElement.lang,
                colorScheme: "whiteblack",
                moreButtonType: "long",
            },
            hooks: {
                onready: () => {
                    console.log("asdadsaa");

                    const title = document.querySelector(".ya-share2__title");
                    if (title) {
                        title.textContent = "Поделиться сервисом";
                    }
                },
            },
        });
    }, []);

    if (!isQuizComplete) {
        return (
            <>
                <main>
                    <div className="container">
                        <Title size="normal" tag="h1" />
                        <h2 className="subtitle">Сперва нужно пройти тест</h2>
                        <div className="btn-wrapper btn-wrapper_centered btn-wrapper-main">
                            <button onClick={onBackBtnClick} className="btn">
                                На главную
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
    return (
        <>
            <main className="page-results" >
                <div className="container">
                    <div className="image-save-container" ref={imageRef}>
                        <Title size="normal" tag="h1" />
                        <div className="description">
                            <p className="description__p">
                                А вот что у нас получилось
                            </p>
                        </div>

                        <div className="results-question">{questionValue}</div>

                        <div className="results">
                            <div className="results__column results__column_left">
                                <div className="results__column-header">
                                    <YellowCheck className="results__column-header-icon" />
                                    <span className="text_yellow results__column-header-yellow">
                                        ЕСЛИ ВЫ{" "}
                                    </span>
                                    СДЕЛАЕТЕ
                                </div>
                                <ResultList type="pros" choices={prosToDoArr} />
                                <ResultList type="cons" choices={consToDoArr} />
                                <div className="results__sum">
                                    {getToDoSum()}
                                </div>
                            </div>
                            <div className="results__column results__column_right">
                                <div className="results__column-header">
                                    <YellowCross className="results__column-header-icon" />
                                    <span className="text_yellow results__column-header-yellow">
                                        ЕСЛИ ВЫ{" "}
                                    </span>
                                    НЕ СДЕЛАЕТЕ
                                </div>

                                <ResultList
                                    type="pros"
                                    choices={prosNotToDoArr}
                                />
                                <ResultList
                                    type="cons"
                                    choices={consNotToDoArr}
                                />

                                <div className="results__sum">
                                    {getNotToDoSum()}
                                </div>
                            </div>

                            <div className="results__devider"></div>
                        </div>

                        <div className="conclusion">
                            <h3 className="conclusion__title">
                                Теперь вы можете сделать вывод
                            </h3>
                            <p className="conclusion__p">
                                какое решение будет для вас выгоднее,
                                позитивнее, эффективнее.
                            </p>
                            <p className="conclusion__p">
                                Если в итоге вышло отрицательное число, значит
                                минусов в этом решении намного больше, чем
                                плюсов. Или важность и вес отрицательных
                                последствий сильнее, чем ожидаемая польза.
                            </p>
                            <p className="conclusion__p">
                                Если на оба решения вы получили отрицательные
                                числа, то "из двух зол выбирают меньшее".
                            </p>
                        </div>

                        <div className="quote">
                            И помните - "Нет правильного или неправильного
                            решения. Есть только выбор и его последствия" -
                            Кристина Дэвер
                        </div>

                        <div className="contacts">
                            <p className="contacts__text">
                                Если вы хотите разобраться в себе, научиться
                                доверять своим решениям или проработать
                                определенные сферы жизни, переходите на основной
                                сайт или подписывайтесь на тг-канал автора этого
                                сервиса
                            </p>
                            <a
                                href="https://psychocode.ru/?utm_source=choice&utm_medium=web&utm_campaign=first"
                                target="_blank"
                                className="contacts__link"
                            >
                                <WebsiteIcon className="contacts__link-icon" />
                                <span>psychocode.ru</span>
                            </a>
                            <a
                                className="contacts__link"
                                href="https://click.tgtrack.ru/6842309ebe3c9"
                                target="_blank"
                            >
                                <TelegramIcon className="contacts__link-icon" />
                                <span>@thoughts_ys</span>
                            </a>
                        </div>
                    </div>

                    <div className="btn-wrapper btn-wrapper-results">
                        <button
                            className="btn btn_small"
                            onClick={onAgainBtnClick}
                        >
                            Пройти ещё раз
                        </button>
                        <button
                            className="btn btn_small"
                            onClick={onDownloadBtnClick}
                        >
                            Скачать результат
                        </button>
                        <div
                            className="yandex-share-btn"
                            id="ya-share2"
                            data-limit="0"
                        >
                            Поделиться сервисом
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
