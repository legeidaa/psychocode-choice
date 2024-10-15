import { useDispatch, useSelector } from "react-redux";
import { FirstStep } from "./components/steps/FirstStep";
import {  step } from "./store/quizDataSelectors";
import { SecondStep } from "./components/steps/SecondStep";
import { setStep } from "./store/quizDataSlice";

function App() {
    const currentStep = useSelector(step);
    const dispatch = useDispatch();
    // dispatch(setStep(0));
    const stepContnent = () => {
        switch (currentStep) {
            case 0:
                return <FirstStep />;
            case 1:
                return <SecondStep />;
            case 2:
                return <></>;
            case 3:
                return <></>;
            case 4:
                return <></>;
            case 5:
                return <></>;
            default:
                dispatch(setStep(0));
                return <FirstStep />;
        }
    };
    return (
        <>
            <header></header>
            <main>{stepContnent()}</main>
            <footer></footer>
        </>
    );
}

export default App;
