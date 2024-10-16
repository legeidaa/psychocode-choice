import { ChangeEvent, FC } from "react";
interface InputProps extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onDelete?: () => void;
    value?: string;
    placeholder?: string;
    readonly?: boolean;
}

export const Input: FC<InputProps> = (props) => {
    const { className, onChange, onDelete, value, placeholder, ...otherProps } = props;
    // console.log(value);
    
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
            {onDelete && <button className="input__delete" onClick={onDelete} />}
        </div>
    );
};
