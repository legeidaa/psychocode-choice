import { FC } from "react";
import { ChoicesList } from "../ChiocesList";
import { useDispatch } from "react-redux";
import { setNextStep, setPrevStep } from "../../store/quizDataSlice";

export const SecondStep: FC = () => {
    const values = ["sadasd", "asdad"];
    
    const dispatch = useDispatch();
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

            <ChoicesList values={values} />
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
