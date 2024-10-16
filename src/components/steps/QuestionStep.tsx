import { FC, useState } from "react";
import { Textarea } from "../Textarea";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion, setNextStep } from "../../store/quizDataSlice";
import { question } from "../../store/quizDataSelectors";

export const QuestionStep: FC = () => {
    const dispatch = useDispatch();
    const questionValue = useSelector(question);
    const [errorText, setErrorText] = useState("");

    const onQuestionChange = (text: string) => {
        if (text.length > 0) {
            setErrorText("")
        }
        dispatch(setQuestion(text))
    };
    
    const onNextBtnClick = () => {
        if (questionValue.length === 0) {
            setErrorText("Поле не может быть пустым");
            return;
        }
        dispatch(setNextStep());
    };
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
            <Textarea
                errorText={errorText}
                onChange={onQuestionChange}
                value={questionValue}
            />
            <div className="example">
                <p>Например:</p>
                <p>Купить ли мне автомобиль?</p>
                <p>Стоит ли мне покупать автомобиль?</p>
                <p>Купить автомобиль или не купить?</p>
            </div>
            <div className="btn-wrapper">
                <button className="btn" onClick={onNextBtnClick}>
                    Далее
                </button>
            </div>
        </div>
    );
};
