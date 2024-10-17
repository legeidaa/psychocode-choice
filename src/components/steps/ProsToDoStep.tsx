import { FC, useState } from "react";
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
import { Title } from "../Title";

export const ProsToDoStep: FC = () => {
    const choices = useSelector(prosToDo);
    const dispatch = useDispatch();
    const [errorText, setErrorText] = useState("");

    const handleInputChange = (value: string, i: number) => {
        if (errorText !== "" && value.length === 1) {
            setErrorText("");
        }
        dispatch(changeChoice({ row: "prosToDo", title: value, i }));
    };
    const addChoiceInput = () => {
        dispatch(addChoice({ row: "prosToDo", title: "" }));
    };

    const handleRowDelete = (i: number) => {
        dispatch(deleteChoice({ row: "prosToDo", i }));
    };

    const onNextBtnClick = () => {
        for (const { title } of choices) {
            if (title.length === 0) {
                setErrorText("Поле не может быть пустым");
                return;
            }
        }
        setErrorText("");
        dispatch(setNextStep());
    };
    return (
        <div className="container">
            <Title size="normal" tag="h2" />
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
                choices={choices}
                onInputChange={handleInputChange}
                onRowDelete={handleRowDelete}
                errorText={errorText}
                placeholder="Плюс"
                onAddClick={addChoiceInput}
            />
            <div className="btn-wrapper btn-wrapper_right">
                <button className="btn" onClick={() => dispatch(setPrevStep())}>
                    Назад
                </button>
                <button className="btn" onClick={onNextBtnClick}>
                    Далее
                </button>
            </div>
        </div>
    );
};
