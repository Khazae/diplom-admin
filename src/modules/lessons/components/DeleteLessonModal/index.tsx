import Modal from "../../../../common/components/Modal";

interface Props {
  onClose?: () => void;
  visible?: boolean;
  loading?: boolean;
  submit?: (e: any) => void;
}

const CreatedLessonModal = ({ onClose, visible, loading, submit }: Props) => {
  return (
    <Modal onClose={onClose} show={visible}>
      Точно хотите удалить группу?
      {loading && <h3>Отправка...</h3>}
      <br />
      <button onClick={onClose}>Net</button> <br />{" "}
      <button onClick={submit}>Da</button>
    </Modal>
  );
};

export default CreatedLessonModal;
