import { FC } from "react";
import { Input } from "./Input";
import { Choices } from "../store/quizDataSlice";

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
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27.8358 51.2961C40.7928 51.2961 51.2965 40.7924 51.2965 27.8354C51.2965 14.8784 40.7928 4.37463 27.8358 4.37463C14.8787 4.37463 4.375 14.8784 4.375 27.8354C4.375 40.7924 14.8787 51.2961 27.8358 51.2961ZM27.8358 55.2961C43.0019 55.2961 55.2965 43.0015 55.2965 27.8354C55.2965 12.6692 43.0019 0.374634 27.8358 0.374634C12.6696 0.374634 0.375 12.6692 0.375 27.8354C0.375 43.0015 12.6696 55.2961 27.8358 55.2961Z"
                            fill="#F9E001"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27.835 43.8593C26.7304 43.8593 25.835 42.9638 25.835 41.8593L25.835 14.3509C25.835 13.2463 26.7304 12.3509 27.835 12.3509C28.9395 12.3509 29.835 13.2463 29.835 14.3509L29.835 41.8593C29.835 42.9638 28.9395 43.8593 27.835 43.8593Z"
                            fill="#F9E001"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M43.3203 28.3748C43.3203 29.4793 42.4249 30.3748 41.3203 30.3748L14.3513 30.3748C13.2467 30.3748 12.3513 29.4793 12.3513 28.3748C12.3513 27.2702 13.2467 26.3748 14.3513 26.3748L41.3203 26.3748C42.4249 26.3748 43.3203 27.2702 43.3203 28.3748Z"
                            fill="#F9E001"
                        />
                    </svg>
                </button>
                <span>Нажмите, чтобы добавить еще строку</span>
            </div>
        </>
    );
};
