import { FC } from "react";
import { Choices } from "../store/quizDataSlice";
import AddIcon from "../assets/img/add.svg?react";
import MinusIcon from "../assets/img/minus.svg?react";

interface ResultListProps {
    choices: Choices;
    type: "pros" | "cons";
}
export const ResultList: FC<ResultListProps> = ({ choices, type }) => {
    return (
        <div className={["result-list", `result-list_${type}`].join(" ")}>
            <div className="result-list__icon">
                {type === "pros" ? <AddIcon /> : <MinusIcon />}
            </div>
            <ul className="result-list__ul">
                {choices.map(({ title }, i) => (
                    <li className="result-list__item" key={i}>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
