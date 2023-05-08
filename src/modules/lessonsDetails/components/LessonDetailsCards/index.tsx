import Icon from "../../../../common/components/Icon";
import styles from "./styles.module.css";

interface LessonItemProps {
  day: string;
  lessons: any;
  onEdit: (day: string, lessons: any) => void;
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
        {lessons &&
          lessons.map((lesson, index) => (
            <div key={index} className={styles.itemLesson}>
              <h4>{lesson.lesson}</h4>
              <h4>{lesson.teacher}</h4>
              <h4>{lesson.time}</h4>
              <h4>{lesson.room}</h4>
              <br />
            </div>
          ))}
      </div>
      <br />
    </section>
  </div>
);

export default LessonDetailsCards;
