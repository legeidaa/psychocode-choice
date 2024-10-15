import { FC } from "react";
import { Input } from "./Input";

interface ChoicesListProps {
    values: string[];
}

export const ChoicesList: FC<ChoicesListProps> = ({ values }) => {
    const handleInputChange = (value: string, i: number) => {
        values[i] = value;
    };
    return (
        <ul className="choices-list">
            {values.map((value, i) => (
                <li className="choices-list__item">
                    <Input
                        value={value}
                        onChange={(value) => handleInputChange(value, i)}
                    />
                </li>
            ))}
        </ul>
    );
};
