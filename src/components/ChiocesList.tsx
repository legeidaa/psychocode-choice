import { FC } from "react";
import { Input } from "./Input";

interface ChoicesListProps {
    values: string[];
    onInputChange: (value: string, i: number) => void;
    onRowDelete: (i: number) => void;
}

export const ChoicesList: FC<ChoicesListProps> = ({
    values,
    onInputChange,
    onRowDelete,
}) => {
    return (
        <ul className="choices-list">
            {values.map((value, i) => (
                <li key={i} className="choices-list__item">
                    <Input
                        value={value}
                        onChange={(e) => onInputChange(e.target.value, i)}
                        onDelete={() => onRowDelete(i)}
                    />
                </li>
            ))}
        </ul>
    );
};
