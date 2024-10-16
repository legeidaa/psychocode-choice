import { FC } from "react";
import { useDispatch} from "react-redux";
import {  setNextStep } from "../../store/quizDataSlice";

export const FirstStep: FC = () => {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1 className="title">
                ПСИХоКОД
                <span className="text_yellow">ВЫБОРА</span>
            </h1>
            <h2 className="subtitle">
                Сервис, который поможет Вам принять{" "}
                <span className="text_yellow">взвешенное</span> решение
            </h2>

            <div className="btn-wrapper">
                <button className="btn btn_big" onClick={() => dispatch(setNextStep())}>
                    Начать
                </button>
            </div>
        </div>
    );
};
