import { FC } from "react";
import { ChoicesList } from "../ChiocesList";
import { useDispatch, useSelector } from "react-redux";
import {
    addChoice,
    changeChoice,
    deleteChoice,
    setNextStep,
    setPrevStep,
} from "../../store/quizDataSlice";
import { prosToDo } from "../../store/quizDataSelectors";

export const SecondStep: FC = () => {
    const choices = useSelector(prosToDo);
    const dispatch = useDispatch();

    const handleInputChange = (value: string, i: number) => {
        dispatch(changeChoice({ row: "prosToDo", title: value, i }));
    };
    const addChoiceInput = () => {
        dispatch(addChoice({ row: "prosToDo", title: "" }));
    };

    const handleRowDelete = (i: number) => {
        dispatch(deleteChoice({ row: "prosToDo", i }));
    };
    return (
        <div>
            <h2 className="subtitle">
                ПСИХоКОД <span className="text_yellow">ВЫБОРА</span>
            </h2>
            <div className="description">
                <p className="description__p">
                    Если вы это <span className="text_yellow">СДЕЛАЕТЕ</span>,
                    какие <span className="text_yellow">плюсы</span>, выгоды,
                    преимущества, пользу от этого получите?
                </p>
                <p className="description__p">
                    Хорошо обдумайте и впишите каждый плюс в отдельную строку
                </p>
            </div>

            <ChoicesList
                values={choices.map((choice) => choice.title)}
                onInputChange={handleInputChange}
                onRowDelete={handleRowDelete}
            />
            <button className="btn" onClick={addChoiceInput}>
                Добавить еще
            </button>
            <div className="btn-wrapper">
                <button className="btn" onClick={() => dispatch(setPrevStep())}>
                    Назад
                </button>
                <button className="btn" onClick={() => dispatch(setNextStep())}>
                    Далее
                </button>
            </div>
        </div>
    );
};
