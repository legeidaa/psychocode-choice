import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion, setNextStep } from "../../store/quizDataSlice";
import { question } from "../../store/quizDataSelectors";
import { Title } from "../Title";
import { Input } from "../Input";

export const QuestionStep: FC = () => {
    const dispatch = useDispatch();
    const questionValue = useSelector(question);
    const [errorText, setErrorText] = useState("");

    const onQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        if (text.length > 0) {
            setErrorText("");
        }
        dispatch(setQuestion(text));
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
            <Title size="big" tag="h2" />
            <h2 className="subtitle">
                <span className="text_yellow">Сделать или не сделать</span>, вот
                в чем вопрос
            </h2>
            <Input
                className="input-start"
                errorText={errorText}
                onChange={onQuestionChange}
                value={questionValue}
                shapeType="start"
                placeholder="Ваш вопрос"
            />
            <div className="example">
                <p className="example__p example__p_first">Например:</p>
                <p className="example__p">Купить ли мне автомобиль?</p>
                <p className="example__p">Стоит ли мне покупать автомобиль?</p>
                <p className="example__p">Купить автомобиль или не купить?</p>
            </div>
            <div className="btn-wrapper btn-wrapper_centered">
                <button className="btn" onClick={onNextBtnClick}>
                    Далее
                </button>
            </div>
        </div>
    );
};
