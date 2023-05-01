import Modal from "../../../../common/components/Modal";
import styles from "./styles.module.css";

interface Props {
  visible?: boolean;
  onClose?: () => void;
  day: string;
  lessonsId: string;
  lessons: string[];
  onSave: (day: string, lessonsId: string, lessons: string[]) => void;
  onAddLesson: () => void;
  onChangeLesson: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const LessonEditModal = ({
  visible,
  onClose,
  day,
  lessonsId,
  lessons,
  onSave,
  onAddLesson,
  onChangeLesson,
}: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSave(
      day,
      lessonsId,
      lessons.filter((lesson) => lesson !== "")
    );
  };

  return (
    <Modal size="30" onClose={onClose} show={visible}>
      <div className={styles.content}>
        <div>Редактировать</div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={day} disabled />
          <div className={styles.items}>
            {lessons?.map((lesson, index) => (
              <div className={styles.item}>
                <input
                  key={index}
                  type="text"
                  value={lesson}
                  placeholder="Название урока"
                  className={styles.input}
                  onChange={(e) => onChangeLesson(e, index)}
                />
              </div>
            ))}
          </div>
          <button type="button" onClick={onAddLesson}>
            Добавить урок
          </button>
          <button type="submit">Save</button>
        </form>
      </div>
    </Modal>
  );
};

export default LessonEditModal;
