import { FC } from "react";
import { Input } from "./Input";

interface ChoicesListProps {
    values: string[];
    onInputChange: (value: string, i: number) => void;
}

export const ChoicesList: FC<ChoicesListProps> = ({
    values,
    onInputChange,
}) => {
    return (
        <ul className="choices-list">
            {values.map((value, i) => (
                <li key={i} className="choices-list__item">
                    <Input
                        value={value}
                        onChange={(e) => onInputChange(e.target.value, i)}
                    />
                </li>
            ))}
        </ul>
    );
};
