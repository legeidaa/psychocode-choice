import { FC } from "react";
import { useDispatch } from "react-redux";
import { setNextStep } from "../../store/quizDataSlice";
import { Title } from "../Title";

export const StartStep: FC = () => {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <Title size="big" tag="h1" />
            <h2 className="subtitle">
                Сервис, который поможет Вам принять 
                <span className="text_yellow"> взвешенное</span> решение
            </h2>

            <div className="btn-wrapper btn-wrapper-main btn-wrapper_centered">
                <button
                    className="btn btn_big"
                    onClick={() => dispatch(setNextStep())}
                >
                    Начать
                </button>
            </div>
        </div>
    );
};
