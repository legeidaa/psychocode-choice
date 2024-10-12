import { FC } from "react";

interface TextareaProps extends HTMLTextAreaElement {
    onChange: (text: string) => void;
}

export const Textarea: FC<TextareaProps> = ({ onChange, ...props }) => {
    return (
        <div className="textarea">
            <textarea
                className="textarea__input"
                onChange={(e) => onChange(e.target.value)}
                {...props}
            />
        </div>
    );
};
