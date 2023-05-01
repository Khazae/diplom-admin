import { ReactNode, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  show?: boolean;
  onClose?: () => void;
  size?: string;
  children?: ReactNode;
}

const Modal = ({ show, onClose, size = "50", children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(show);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose?.();
  };

  const sizeStyle = {
    width: `${size}%`,
    height: `${size}%`,
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent} style={sizeStyle}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
