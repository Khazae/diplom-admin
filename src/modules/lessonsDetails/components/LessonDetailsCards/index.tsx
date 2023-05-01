import Icon from "../../../../common/components/Icon";
import styles from "./styles.module.css";

interface LessonItemProps {
  day: string;
  lessons: string[];
  onEdit: (day: string, lessons: string[]) => void;
}

const LessonDetailsCards = ({ day, lessons, onEdit }: LessonItemProps) => (
  <div className={styles.items}>
    <section className={styles.item}>
      <div className={styles.iconContent} onClick={() => onEdit(day, lessons)}>
        <Icon icon="bx-edit-alt" className={styles.icon} />
      </div>
      <h2>{day}</h2>
      <br />
      <div>
        {lessons.map((lesson, index) => (
          <h4 key={index}>{lesson}</h4>
        ))}
      </div>
      <br />
    </section>
  </div>
);

export default LessonDetailsCards;
