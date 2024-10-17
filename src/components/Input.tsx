import { ChangeEvent, FC } from "react";
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
        <div className={`input ${className}`}>
            <input
                value={value}
                placeholder={placeholder}
                className={classNames}
                onChange={onChangeHandler}
                {...otherProps}
            />
            {errorText && <div className="error-text input__error">{errorText}</div>}
            {onDelete && (
                <button className="btn btn_round btn_icon input__delete" onClick={onDelete}>
                    <svg
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="48"
                            cy="48"
                            r="44.5"
                            stroke="white"
                            strokeWidth="7"
                        />
                        <path
                            d="M31.0259 65.4742L64.9744 31.5258"
                            stroke="white"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                        <path
                            d="M64.9741 65.4742L31.0256 31.5257"
                            stroke="white"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};
