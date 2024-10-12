import { FC } from "react";

interface Props {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const FirstStep: FC<Props> = ({ setStep }) => {
    const nextStep = () => {
        setStep((step: number) => step + 1);
    }

    return (
        <div>
            <h1>First Step</h1>
            <button className="btn" onClick={nextStep}>Далее</button>
        </div>
    );
}
