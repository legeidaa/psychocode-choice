import { ChangeEvent, FC } from "react";
interface InputProps {
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    readonly?: boolean;
}

export const Input: FC<InputProps> = (props) => {
    const { className, onChange, value, placeholder, ...otherProps } = props;
    console.log(value);
    

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <div className={`input ${className}`}>
            <input
                value={value}
                placeholder={placeholder}
                className="input__element"
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
};
