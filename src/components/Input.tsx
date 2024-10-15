import { ChangeEvent, FC } from "react";
interface InputProps {
    className?: string;
    onChange?: (text: string) => void;
    value?: string;
    placeholder?: string;
    readonly?: boolean;
}

export const Input: FC<InputProps> = (props) => {
    const { className, onChange, value, placeholder, ...otherProps } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={`input ${className}`}>
            <textarea
                value={value}
                placeholder={placeholder}
                className="input__element"
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
};
