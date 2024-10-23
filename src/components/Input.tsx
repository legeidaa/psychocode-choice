import { ChangeEvent, FC } from "react";
import DeleteIcon from "../assets/img/cross.svg?react";
interface InputProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onDelete?: () => void;
    value?: string;
    placeholder?: string;
    readonly?: boolean;
    errorText?: string;
    shapeType: "start" | "choice" | "weight";
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        onChange,
        onDelete,
        value,
        placeholder,
        errorText,
        shapeType,
        ...otherProps
    } = props;

    let classNames = `input__element input__element_${shapeType}`;
    if (onDelete) {
        classNames += " input__element_delete";
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <div className={`input ${className ? className : ''}`}>
            <input
                value={value}
                placeholder={placeholder}
                className={classNames}
                onChange={onChangeHandler}
                {...otherProps}
            />
            {errorText && (
                <div className="error-text input__error">{errorText}</div>
            )}
            {onDelete && (
                <button
                    className="btn btn_round btn_icon input__delete"
                    onClick={onDelete}
                >
                    <DeleteIcon />
                </button>
            )}
        </div>
    );
};
