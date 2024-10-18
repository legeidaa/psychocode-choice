import { FC } from "react";
import { Input } from "./Input";
import { Choices } from "../store/quizDataSlice";
import AddIcon from "../assets/img/add.svg?react";

interface ChoicesListProps {
    choices: Choices;
    onInputChange: (value: string, i: number) => void;
    onRowDelete: (i: number) => void;
    errorText?: string;
    placeholder?: string;
    onAddClick?: () => void;
}

export const ChoicesList: FC<ChoicesListProps> = ({
    choices,
    onInputChange,
    onRowDelete,
    errorText,
    placeholder,
    onAddClick,
}) => {
    return (
        <>
            <ul className="choices-list">
                {choices.map(({ title }, i) => (
                    <li key={i} className="choices-list__item">
                        <Input
                            shapeType="choice"
                            value={title}
                            className=""
                            placeholder={placeholder}
                            onChange={(e) => onInputChange(e.target.value, i)}
                            onDelete={
                                choices.length > 1
                                    ? () => onRowDelete(i)
                                    : undefined
                            }
                        />
                    </li>
                ))}
            </ul>
            {errorText && <div className="error-text">{errorText}</div>}
            <div onClick={onAddClick} className="choices-list__add">
                <button className="btn btn_round btn_icon">
                    <AddIcon />
                </button>
                <span>Нажмите, чтобы добавить еще строку</span>
            </div>
        </>
    );
};
