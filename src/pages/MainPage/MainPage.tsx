import { useSelector } from "react-redux";
import { step } from "../../store/quizDataSelectors";
import { steps } from "../../components/steps/steps";
import { FC } from "react";

export const MainPage: FC = () => {
    const currentStep = useSelector(step);
    const stepContnent = () => {
        for (let i = 0; i < steps.length; i++) {
            if (i === currentStep) {
                return steps[i];
            }
        }
        return steps[0];
    };

    return (
        <>
            <main>{stepContnent()}</main>
            <footer></footer>
        </>
    );
}
