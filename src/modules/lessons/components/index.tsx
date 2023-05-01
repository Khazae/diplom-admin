import { Link } from "react-router-dom";
import Icon from "../../../common/components/Icon";
import { Lesson } from "../../../entities/lesson";
import styles from "./styles.module.css";

interface Props {
  lessons?: Lesson[];
  loading?: boolean;
  error?: Error | null;
  onClickId?: (id: string, lessonsId: string) => void;
}

const ListLessonsCards = ({
  lessons = [],
  loading,
  error,
  onClickId,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {loading && <h2>Loading...</h2>}
        {error && !loading && <h2>Неизвестная ошибка</h2>}
        {!lessons.length && !loading && !error && <h2>Не уроков</h2>}
        {!error &&
          !loading &&
          lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={styles.item}
            >
              <div className={styles.content}>
                <div className={styles.iconContent} onClick={() => onClickId?.(lesson.id, lesson.lessonsId)}>
                  <Icon icon="bx-x-circle" className={styles.icon} />
                </div>
                <Link to={`/lessons/${lesson.lessonsId}`}>
                <h2 className={styles.name}>{lesson.name}</h2>
                <h4 className={styles.time}>
                  {lesson.startTime} - {lesson.endTime}
                </h4>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListLessonsCards;
