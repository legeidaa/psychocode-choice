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
import { consNotToDo } from "../../../store/quizDataSelectors";
import { Title } from "../../Title";

export const ConsNotToDoStep: FC = () => {
    const choices = useSelector(consNotToDo);
    const dispatch = useDispatch();
    const [errorText, setErrorText] = useState("");

    const handleInputChange = (value: string, i: number) => {
        if (errorText !== "" && value.length === 1) {
            setErrorText("");
        }
        dispatch(changeChoice({ row: "consNotToDo", title: value, i }));
    };
    const addChoiceInput = () => {
        dispatch(addChoice({ row: "consNotToDo", title: "" }));
    };

    const handleRowDelete = (i: number) => {
        dispatch(deleteChoice({ row: "consNotToDo", i }));
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
                    А теперь давайте подумаем о
                    <span className="text_yellow"> минусах</span>, которые
                    последуют, если вы это{" "}
                    <span className="text_yellow"> НЕ СДЕЛАЕТЕ</span>. Что вы
                    потеряете из-за того, что не сделали шаг в сторону
                    изменений, какие выгоды и перспективы упустите.
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
