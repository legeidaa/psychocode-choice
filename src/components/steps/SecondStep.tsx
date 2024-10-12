import { FC } from "react";

interface Props {
    setNextStep: () => void;
    setPrevStep: () => void;
}

export const SecondStep: FC<Props> = ({ setNextStep, setPrevStep }) => {
    return (
        <div>
            <h2 className="subtitle">ПСИХоКОД <span className="text_yellow">ВЫБОРА</span></h2>
            <div className="description">
                <p className="description__p">Если вы это <span className="text_yellow">СДЕЛАЕТЕ</span>, какие <span className="text_yellow">плюсы</span>, выгоды, преимущества, пользу от этого получите?</p>
                <p className="description__p">Хорошо обдумайте и впишите каждый плюс в отдельную строку</p>
            </div>
            <div className="btn-wrapper">
                <button className="btn" onClick={setPrevStep}>
                    Назад
                </button>
                <button className="btn" onClick={setNextStep}>
                    Далее
                </button>
            </div>
        </div>
    );
};
