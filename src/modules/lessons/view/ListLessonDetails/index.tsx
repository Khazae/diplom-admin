import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailLesson } from "../../../../entities/detailLesson";
import { fetchGetLesson } from "../../../../api/modules/lessons/requests/fetchGetLesson";
import Icon from "../../../../common/components/Icon";
import styles from "./styles.module.css";
import Modal from "../../../../common/components/Modal";
import { editLesson } from "../../../../api/modules/detailsLesson/requests/editLesson";

interface LessonItemProps {
  day: string;
  lessons: string[];
  onEdit: (day: string, lessons: string[]) => void;
}

const LessonItem = ({ day, lessons, onEdit }: LessonItemProps) => (
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

const ListLessonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<DetailLesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [editData, setEditData] = useState<{
    day: string;
    lessonsId: string;
    lessons: string[];
  } | null>(null);

  useEffect(() => {
    if (!id) return;
    loadLesson(id);
  }, [id]);

  const loadLesson = (id: string) => {
    setLoading(true);
    fetchGetLesson(id)
      .then(([lesson]) => {
        setLesson(lesson);
        console.log(lesson);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEditLessonModal = async (day: string, lessons: string[]) => {
    const { lessonsId } = lesson[0];
    setModalVisible(true);
    setEditData({ day, lessonsId, lessons });
  };

  const handleEditLesson = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { day, lessonsId, lessons } = editData || {};

    const dataLessons = lessons?.filter((item) => item !== "");

    if (day && lessonsId && dataLessons && editLesson) {
      try {
        const [updateLesson] = await editLesson(lessonsId, day, dataLessons);
        setLesson((prevLesson) =>
          prevLesson.map((item) =>
            item.lessonsId === lessonsId ? { ...item, ...updateLesson } : item
          )
        );
        setModalVisible(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const addEmptyLesson = () => {
    setEditData((prevLesson) => {
      if (!prevLesson) return null;
      const newLessons = [...prevLesson?.lessons, ""];
      return { ...prevLesson, lessons: newLessons };
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {lesson[0] &&
        lesson[0].lessons.map((item) => (
          <LessonItem
            key={item._id}
            day={item.day}
            lessons={item.lesson}
            onEdit={(day, lessons) => handleEditLessonModal(day, lessons)}
          />
        ))}
      {modalVisible && (
        <Modal onClose={() => setModalVisible(false)} show={modalVisible}>
          Редактировать
          <form onSubmit={handleEditLesson}>
            <input type="text" value={editData?.day} disabled />
            {editData?.lessons.map((lesson, index) => (
              <input
                key={index}
                type="text"
                value={lesson}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    lessons: editData?.lessons.map((l, i) =>
                      i === index ? e.target.value : l
                    ),
                  })
                }
              />
            ))}

            <br />
            <br />
            <br />

            <button type="button" onClick={addEmptyLesson}>
              Добавить урок
            </button>

            <button type="submit">Save</button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ListLessonDetails;
