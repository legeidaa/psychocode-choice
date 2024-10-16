import { FC } from "react";
import { Input } from "./Input";
import { Choices } from "../store/quizDataSlice";

interface ChoicesListProps {
    choices: Choices;
    onInputChange: (value: string, i: number) => void;
    onRowDelete: (i: number) => void;
    errorText?: string;
}

export const ChoicesList: FC<ChoicesListProps> = ({
    choices,
    onInputChange,
    onRowDelete,
    errorText,
}) => {
    return (
        <>
            <ul className="choices-list">
                {choices.map(({ title }, i) => (
                    <li key={i} className="choices-list__item">
                        <Input
                            value={title}
                            onChange={(e) => onInputChange(e.target.value, i)}
                            onDelete={() => onRowDelete(i)}
                        />
                    </li>
                ))}
            </ul>
            {errorText && <div className="error-text">{errorText}</div>}
        </>
    );
};
