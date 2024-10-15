import { FC } from "react";
import { Textarea } from "../Textarea";
import { useDispatch, useSelector } from "react-redux";
import { setDilemma, setNextStep } from "../../store/quizDataSlice";
import { dilemma } from "../../store/quizDataSelectors";

export const FirstStep: FC = () => {
    const dispatch = useDispatch();
    const dilemmaValue = useSelector(dilemma);
    const onDilemmaChange = (text: string) => dispatch(setDilemma(text));
    return (
        <div className="container">
            <h1 className="title">
                ПСИХоКОД
                <span className="text_yellow">ВЫБОРА</span>
            </h1>
            <h2 className="subtitle">
                <span className="text_yellow">Сделать или не сделать</span>, вот
                в чем вопрос
            </h2>
            <Textarea onChange={onDilemmaChange} value={dilemmaValue}/>
            <div className="example">
                <p>Например:</p>
                <p>Купить ли мне автомобиль?</p>
                <p>Стоит ли мне покупать автомобиль?</p>
                <p>Купить автомобиль или не купить?</p>
            </div>
            <div className="btn-wrapper">
                <button className="btn" onClick={() => dispatch(setNextStep())}>
                    Далее
                </button>
            </div>
        </div>
    );
};
