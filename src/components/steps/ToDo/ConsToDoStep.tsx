import { FC, useState } from "react";
import { ChoicesList } from "../../ChiocesList";
import { useDispatch, useSelector } from "react-redux";
import {
    addChoice,
    changeChoice,
    deleteChoice,
    setNextStep,
    setPrevStep,
} from "../../../store/quizDataSlice";
import { consToDo } from "../../../store/quizDataSelectors";
import { Title } from "../../Title";

export const ConsToDoStep: FC = () => {
    const choices = useSelector(consToDo);
    const dispatch = useDispatch();
    const [errorText, setErrorText] = useState("");

    const handleInputChange = (value: string, i: number) => {
        if (errorText !== "" && value.length === 1) {
            setErrorText("");
        }
        dispatch(changeChoice({ row: "consToDo", title: value, i }));
    };
    const addChoiceInput = () => {
        dispatch(addChoice({ row: "consToDo", title: "" }));
    };

    const handleRowDelete = (i: number) => {
        dispatch(deleteChoice({ row: "consToDo", i }));
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
                    А теперь давайте подумаем о{" "}
                    <span className="text_yellow">минусах</span>, которые
                    последуют, если вы это{" "}
                    <span className="text_yellow">СДЕЛАЕТЕ</span>. Что вы
                    потеряете из того, что имеете, и какие неудобства и проблемы
                    могут возникнуть.
                </p>
                <p className="description__p">
                    Хорошо обдумайте и впишите каждый минус в отдельную строку.
                </p>
            </div>

            <ChoicesList
                choices={choices}
                onInputChange={handleInputChange}
                onRowDelete={handleRowDelete}
                errorText={errorText}
                placeholder="Минус"
                onAddClick={addChoiceInput}
            />
            <div className="btn-wrapper btn-wrapper-choices btn-wrapper_right">
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
