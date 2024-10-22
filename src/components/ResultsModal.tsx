import Modal from "react-modal";
import { Title } from "./Title";
import { FC } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../assets/img/close-cross.svg?react";

Modal.setAppElement("#root");

interface ModalProps {
    isOpen: boolean;
    closeFunc: () => void;
    onAfterClose?: () => void;
}

export const ResultsModal: FC<ModalProps> = ({
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
                <button className="btn btn_round btn_icon modal__close-btn" onClick={closeFunc}>
                    <CloseIcon className="modal__close-btn-icon"/>
                </button>
            </header>
            <div className="modal__buttons">
                <button className="btn" onClick={closeFunc}>
                    Не хочу
                </button>
                <Link className="btn" to="/donate" target="_blank">
                    Хочу
                </Link>
            </div>
        </Modal>
    );
};
