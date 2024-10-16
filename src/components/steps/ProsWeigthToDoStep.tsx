import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeChoice,
    setNextStep,
    setPrevStep,
} from "../../store/quizDataSlice";
import { prosToDo } from "../../store/quizDataSelectors";
import { ChoicesWeightsList } from "../ChoicesWeightsList";

export const ProsWeigthToDoStep: FC = () => {
    const choices = useSelector(prosToDo);
    const dispatch = useDispatch();

    const handleInputChange = (value: string, i: number) => {
        dispatch(changeChoice({ row: "prosToDo", weight: Number(value), i }));
    };

    const onNextBtnClick = () => {
        for (const { title } of choices) {
            if (title.length === 0) {
                return;
            }
        }
        dispatch(setNextStep());
    };
    return (
        <div>
            <h2 className="subtitle">
                ПСИХоКОД <span className="text_yellow">ВЫБОРА</span>
            </h2>
            <div className="description">
                <p className="description__p">
                    Оцените каждый плюс по степени важности и ценности по шкале
                    от 10 до 100, где 100 - максимальная важность и главная
                    причина <span className="text_yellow">СДЕЛАТЬ</span>, а 10 -
                    приятный бонус, без которого в принципе можно и обойтись
                </p>
            </div>

            <ChoicesWeightsList
                choices={choices}
                changeInputValue={handleInputChange}
            />
            <div className="btn-wrapper">
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
