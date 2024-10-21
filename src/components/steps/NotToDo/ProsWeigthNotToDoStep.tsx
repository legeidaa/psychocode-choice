import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeChoice,
    setNextStep,
    setPrevStep,
} from "../../../store/quizDataSlice";
import { prosNotToDo } from "../../../store/quizDataSelectors";
import { ChoicesWeightsList } from "../../ChoicesWeightsList";
import { Title } from "../../Title";

export const ProsWeigthNotToDoStep: FC = () => {
    const choices = useSelector(prosNotToDo);
    const dispatch = useDispatch();

    const handleInputChange = (value: string, i: number) => {
        if (value.length > 3) {
            return;
        }
        dispatch(
            changeChoice({ row: "prosNotToDo", weight: Number(value), i })
        );
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
        <div className="container">
            <Title size="normal" tag="h2" />
            <div className="description">
                <p className="description__p">
                    Оцените каждый плюс по степени важности и ценности по шкале
                    от 10 до 100, где 100 - максимальная важность и главная
                    причина <span className="text_yellow"> НЕ ДЕЛАТЬ</span> этого, 
                    а 10 - приятный бонус, без которого в принципе можно и обойтись.
                </p>
            </div>

            <ChoicesWeightsList
                choices={choices}
                changeInputValue={handleInputChange}
            />
            <div className="btn-wrapper btn-wrapper_right ">
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