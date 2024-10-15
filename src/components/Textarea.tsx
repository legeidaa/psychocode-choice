import { FC } from "react";
interface TextareaProps {
    className?: string;
    onChange?: (text: string) => void;
    value?: string;
    placeholder?: string;
    readonly?: boolean;
}

export const Textarea: FC<TextareaProps> = (props) => {
    const { className, onChange, value, placeholder, ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={`textarea ${className}`}>
            <textarea
                value={value}
                placeholder={placeholder}
                className="textarea__element"
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
};