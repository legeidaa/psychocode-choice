import { FC, useState } from "react";
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
    const [errorText, setErrorText] = useState("");

    const handleInputChange = (value: string, i: number) => {
        if (errorText !== "" && value.length >= 1) {
            setErrorText("");
        }
        if (value.length > 3) {
            return;
        }
        dispatch(
            changeChoice({ row: "prosNotToDo", weight: Number(value), i })
        );
    };

    const onNextBtnClick = () => {
        for (const { weight } of choices) {
            if (!weight) {
                setErrorText("Поле не может быть пустым");
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
                    причина <span className="text_yellow"> НЕ ДЕЛАТЬ</span>{" "}
                    этого, а 10 - приятный бонус, без которого в принципе можно
                    и обойтись.
                </p>
                <p className="description__p description__p_small">
                    Вы можете указать один и тот же вес на несколько пунктов,
                    если по вашим ощущениям они равнозначны.
                </p>
            </div>

            <ChoicesWeightsList
                choices={choices}
                changeInputValue={handleInputChange}
                errorText={errorText}
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
