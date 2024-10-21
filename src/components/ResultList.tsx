import { FC } from "react";
import { Choices } from "../store/quizDataSlice";
import AddIcon from "../assets/img/add.svg?react";
import MinusIcon from "../assets/img/minus.svg?react";

interface ResultListProps {
    choices: Choices;
    type: "pros" | "cons";
}
export const ResultList: FC<ResultListProps> = ({ choices, type }) => {
    const sortedChoices = choices.slice().sort((a, b) => {
        if (a.weight && b.weight) {
            return b.weight - a.weight
        }
        return 0
    })
    return (
        <div className={["result-list", `result-list_${type}`].join(" ")}>
            <div className="result-list__icon">
                {type === "pros" ? <AddIcon /> : <MinusIcon />}
            </div>
            <ul className="result-list__ul">
                {sortedChoices.map(({ title }, i) => (
                    <li className="result-list__item" key={i}>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
