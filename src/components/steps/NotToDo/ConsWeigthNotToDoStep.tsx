import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeChoice,
    setPrevStep,
} from "../../../store/quizDataSlice";
import { consNotToDo } from "../../../store/quizDataSelectors";
import { ChoicesWeightsList } from "../../ChoicesWeightsList";
import { Title } from "../../Title";
import { useNavigate } from "react-router-dom";

export const ConsWeigthNotToDoStep: FC = () => {
    const choices = useSelector(consNotToDo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (value: string, i: number) => {
        if (value.length > 3) {
            return;
        }
        dispatch(
            changeChoice({ row: "consNotToDo", weight: Number(value), i })
        );
    };

    const onNextBtnClick = () => {
        for (const { title } of choices) {
            if (title.length === 0) {
                return;
            }
        }
        
        navigate("/results")
    };
    return (
        <div className="container">
            <Title size="normal" tag="h2" />
            <div className="description">
                <p className="description__p">
                    Оцените каждый минус по степени важности и объему негативных
                    последствий, если вы это{" "}
                    <span className="text_yellow"> НЕ СДЕЛАЕТЕ</span>, по шкале
                    от 10 до 100, где 100 - максимальный минус, именно тот,
                    который и заставляет вас мучиться вопросом выбора, а 10 -
                    маленькая неприятность, которую можно легко пережить.
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
