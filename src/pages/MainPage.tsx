import { useDispatch, useSelector } from "react-redux";
import { isComplete, step } from "../store/quizDataSelectors";
import { FC } from "react";
import { Footer } from "../components/Footer";
import { resetState } from "../store/quizDataSlice";
import { Title } from "../components/Title";
import { Link, useNavigate } from "react-router-dom";
import { steps } from "../components/steps/steps";

export const MainPage: FC = () => {
    const dispatch = useDispatch();
    const isQuizComplete = useSelector(isComplete);
    const currentStep = useSelector(step);
    const navigate = useNavigate();

    const onStartClick = () => {
        dispatch(resetState());
        navigate("/quiz");
    };
    const isLastStep = currentStep === steps.length - 1;
    const isFirstStep = currentStep === 0;
    const startBtnText = () => {
        if (!isQuizComplete && isFirstStep) {
            return "Начать";
        }
        return "Начать заново";
    };

    return (
        <>
            <main className="page-main">
                <div className="container">
                    <Title size="big" tag="h1" />
                    <h2 className="subtitle">
                        Сервис, который поможет Вам принять
                        <span className="text_yellow"> взвешенное</span> решение
                    </h2>

                    <div className="btn-wrapper btn-wrapper-main btn-wrapper_centered">
                        <Link
                            to={"/quiz"}
                            className="btn btn_big"
                            onClick={onStartClick}
                        >
                            {startBtnText()}
                        </Link>

                        {!isQuizComplete && !isLastStep && !isFirstStep &&(
                            <Link className="btn btn_big" to={"/quiz"}>
                                Продолжить
                            </Link>
                        )}

                        {isQuizComplete && (
                            <Link to={"/results"} className="btn btn_big">
                                Результат теста
                            </Link>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
