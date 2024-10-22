import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState, setNextStep } from "../../store/quizDataSlice";
import { Title } from "../Title";
import { isComplete } from "../../store/quizDataSelectors";
import { Link } from "react-router-dom";

export const StartStep: FC = () => {
    const dispatch = useDispatch();
    const isQuizComplete = useSelector(isComplete);

    console.log(isQuizComplete);

    const onStartClick = () => {
        dispatch(resetState());
        dispatch(setNextStep());
    };
    return (
        <div className="container">
            <Title size="big" tag="h1" />
            <h2 className="subtitle">
                Сервис, который поможет Вам принять
                <span className="text_yellow"> взвешенное</span> решение
            </h2>

            <div className="btn-wrapper btn-wrapper-main btn-wrapper_centered">
                <button className="btn btn_big" onClick={onStartClick}>
                    {isQuizComplete ? "Начать заново" : "Начать"}
                </button>

                {isQuizComplete && (
                    <Link to={"/results"} className="btn btn_big">
                        Результат теста
                    </Link>
                )}
            </div>
        </div>
    );
};
