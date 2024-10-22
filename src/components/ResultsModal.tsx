import Modal from "react-modal";
import { Title } from "./Title";
import { FC } from "react";
import { Link } from "react-router-dom";

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
            <Title size="normal" tag="h2" />
            <h3 className="modal__subtitle">
                Если было полезно, вы можете поблагодарить сервис
            </h3>
            <div className="modal__buttons">
                <button className="btn" onClick={closeFunc}>
                    Не хочу
                </button>
                <Link className="btn" to="/donate">
                    Хочу
                </Link>
            </div>
        </Modal>
    );
};
