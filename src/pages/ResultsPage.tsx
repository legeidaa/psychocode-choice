import { FC } from "react";
import { Title } from "../components/Title";
import { useSelector } from "react-redux";
import {
    consNotToDo,
    consToDo,
    prosNotToDo,
    prosToDo,
    question,
} from "../store/quizDataSelectors";
import { Footer } from "../components/Footer";
import { ResultList } from "../components/ResultList";

export const ResultsPage: FC = () => {
    const questionValue = useSelector(question);
    const prosToDoArr = useSelector(prosToDo);
    const consToDoArr = useSelector(consToDo);
    const prosNotToDoArr = useSelector(prosNotToDo);
    const consNotToDoArr = useSelector(consNotToDo);
    prosToDoArr.forEach((choice) => {
        console.log(choice, typeof choice, typeof choice.weight);
    });
    const getToDoSum = () => {
        return (
            prosToDoArr.reduce((acc, choice) => acc + choice.weight, 0) -
            consToDoArr.reduce((acc, choice) => acc + choice.weight, 0)
        );
    };
    const getNotToDoSum = () => {
        return (
            prosNotToDoArr.reduce((acc, choice) => acc + choice.weight, 0) -
            consNotToDoArr.reduce((acc, choice) => acc + choice.weight, 0)
        );
    };

    const onAgainBtnClick = () => {};
    const onShareBtnClick = () => {};
    const onDownloadBtnClick = () => {};
    return (
        <>
            <main className="page-results">
                <div className="container">
                    <Title size="normal" tag="h1" />
                    <div className="description">
                        <p className="description__p">
                            А вот что у нас получилось{" "}
                        </p>
                    </div>

                    <div className="results-question">
                        {questionValue}
                    </div>

                    <div className="results">
                        <div className="results__column results__column_left">
                            <div className="results__column-header">
                                <span className="text_yellow">ЕСЛИ ВЫ </span>
                                СДЕЛАЕТЕ
                            </div>
                            <ResultList type="pros" choices={prosToDoArr} />
                            <ResultList type="cons" choices={consToDoArr} />
                            <div className="results__sum">{getToDoSum()}</div>
                        </div>
                        <div className="results__column results__column_right">
                            <div className="results__column-header">
                                <span className="text_yellow">ЕСЛИ ВЫ </span>
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
