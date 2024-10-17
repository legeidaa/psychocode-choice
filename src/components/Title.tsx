import { FC } from "react";
import CheckImg from "../assets/img/check.svg";
import CrossImg from "../assets/img/cross.svg";

interface TitleProps {
    size: "normal" | "big";
    tag: "h1" | "h2";
}
export const Title: FC<TitleProps> = ({ size, tag }) => {
    if (tag === "h1") {
        return (
            <h1 className={size === "big" ? "title title_big" : "title"}>
                <img src={CheckImg} alt="" />
                <img src={CrossImg} alt="" />
                <span>ПСИХоКОД </span>
                <span className="text_yellow">ВЫБОРА</span>
            </h1>
        );
    }

    return (
        <h2 className={size === "big" ? "title title_big" : "title"}>
            <img src={CheckImg} alt="" />
            <img src={CrossImg} alt="" />
            <span>ПСИХоКОД </span>
            <span className="text_yellow">ВЫБОРА</span>
        </h2>
    );
};
