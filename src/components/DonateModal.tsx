import Modal from "react-modal";
import { Title } from "./Title";
import { FC } from "react";
import CloseIcon from "../assets/img/close-cross.svg?react";

Modal.setAppElement("#root");

interface ModalProps {
    isOpen: boolean;
    closeFunc: () => void;
    onAfterClose?: () => void;
}

export const DonateModal: FC<ModalProps> = ({
    isOpen,
    closeFunc,
    onAfterClose,
}) => {
    return (
        <Modal
            onAfterClose={onAfterClose}
            preventScroll
            isOpen={isOpen}
            onRequestClose={closeFunc}
            className="results-modal"
            closeTimeoutMS={200}
        >
            <header className="modal__header">
                <Title size="normal" tag="h2" />
                <h3 className="modal__subtitle">
                    Если было полезно, вы можете поблагодарить сервис
                </h3>
                <button
                    className="btn btn_round btn_icon modal__close-btn"
                    onClick={closeFunc}
                >
                    <CloseIcon className="modal__close-btn-icon" />
                </button>
            </header>
            <form
                className="yoomoney-payment-form"
                action="https://yookassa.ru/integration/simplepay/payment"
                method="post"
                acceptCharset="utf-8"
            >
                <input
                    name="customerNumber input"
                    type="hidden"
                    value="Если вам понравилось использование сервиса, по желанию вы можете отблагодарить разработчиков"
                />

                <div className="ym-input-icon-rub input">
                    <input
                        name="sum"
                        placeholder="0.00"
                        className="ym-input ym-sum-input ym-required-input input__element"
                        type="number"
                        step="any"
                        required
                    />
                </div>
                <button
                    data-text="Отблагодарить"
                    className="btn  ym-result-price"
                >
                    <span className="ym-text-crop">Отблагодарить</span>
                    <span className="ym-price-output"></span>
                </button>
                <img
                    src="https://yookassa.ru/files/Guide_files/logo-white.svg"
                    className="ym-logo"
                    width="114"
                    height="27"
                    alt="ЮKassa"
                />
                <input name="shopId" type="hidden" value="459980" />
            </form>
        </Modal>
    );
};
