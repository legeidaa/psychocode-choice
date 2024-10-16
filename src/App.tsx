import { useSelector } from "react-redux";
import { step } from "./store/quizDataSelectors";
import { steps } from "./components/steps/steps";

function App() {
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
            <header></header>
            <main>{stepContnent()}</main>
            <footer></footer>
        </>
    );
}

export default App;
