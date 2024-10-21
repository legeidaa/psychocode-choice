import { FC } from "react";
import { Title } from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import {
    consNotToDo,
    consToDo,
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

const reduceChoices = (arr: Choices) => {
    return arr.reduce((acc, choice) => {
        if (choice.weight) {
            return acc + choice.weight;
        }
        return acc;
    }, 0);
};

export const ResultsPage: FC = () => {
    const questionValue = useSelector(question);
    const prosToDoArr = useSelector(prosToDo);
    const consToDoArr = useSelector(consToDo);
    const prosNotToDoArr = useSelector(prosNotToDo);
    const consNotToDoArr = useSelector(consNotToDo);
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
    const onShareBtnClick = () => {};
    const onDownloadBtnClick = () => {};
    return (
        <>
            <main className="page-results">
                <div className="container">
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
                                <YellowCheck className="" />
                                <span className="text_yellow results__column-header-yellow">
                                    ЕСЛИ ВЫ{" "}
                                </span>
                                СДЕЛАЕТЕ
                            </div>
                            <ResultList type="pros" choices={prosToDoArr} />
                            <ResultList type="cons" choices={consToDoArr} />
                            <div className="results__sum">{getToDoSum()}</div>
                        </div>
                        <div className="results__column results__column_right">
                            <div className="results__column-header">
                                <YellowCross />
                                <span className="text_yellow results__column-header-yellow">
                                    ЕСЛИ ВЫ{" "}
                                </span>
                                НЕ СДЕЛАЕТЕ
                            </div>

                            <ResultList type="pros" choices={prosNotToDoArr} />
                            <ResultList type="cons" choices={consNotToDoArr} />

                            <div className="results__sum">
                                {getNotToDoSum()}
                            </div>
                        </div>

                        <div className="results__devider"></div>
                    </div>

                    <div className="quote">
                        И помните - "Нет правильного или неправильного решения.
                        Есть только выбор и его последствия" - Кристина Дэвер
                    </div>
                    <script src="https://yastatic.net/share2/share.js"></script>
                    <div
                        className="ya-share2"
                        data-curtain
                        data-shape="round"
                        data-color-scheme="blackwhite"
                        data-services="vkontakte,telegram,twitter,whatsapp"
                    ></div>

                    <div className="btn-wrapper btn-wrapper-results">
                        <button className="btn" onClick={onAgainBtnClick}>
                            Пройти ещё раз
                        </button>
                        <button className="btn" onClick={onDownloadBtnClick}>
                            Скачать результат
                        </button>
                        <button className="btn" onClick={onShareBtnClick}>
                            Поделиться сервисом
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
