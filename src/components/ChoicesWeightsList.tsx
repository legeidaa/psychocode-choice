import { FC } from "react";
import { Input } from "./Input";
import { Choices } from "../store/quizDataSlice";

interface ChoicesListProps {
    choices: Choices;
    changeInputValue: (value: string, i: number) => void;
}

export const ChoicesWeightsList: FC<ChoicesListProps> = ({
    choices,
    changeInputValue,
}) => {
    const onBlur = (value: string, i: number) => {
        if (parseInt(value) < 10) {
            changeInputValue("10", i);
        }
        if (parseInt(value) > 100) {
            changeInputValue("100", i);
        }
    };

    return (
        <ul className="choices-weights-list">
            {choices.map(({ title, weight }, i) => (
                <li key={i} className="choices-weights-list__item">
                    <div className="choices-weights-list__choice">{title}</div>
                    <Input
                        type="number"
                        shapeType="weight"
                        min={10}
                        max={100}
                        value={String(weight)}
                        onChange={(e) => changeInputValue(e.target.value, i)}
                        onBlur={(e) => onBlur(e.target.value, i)}
                        placeholder="50"
                    />
                </li>
            ))}
        </ul>
    );
};
