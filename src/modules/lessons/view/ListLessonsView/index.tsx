import { useEffect, useState } from "react";
import { Lesson } from "../../../../entities/lesson";
import ListLessonsCards from "../../components";
import { fetchAllLessons } from "../../../../api/modules/lessons/requests/fetchAllLessons";
import styles from "../../components/styles.module.css";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../../common/utils/notifications";
import { fetchDeleteLesson } from "../../../../api/modules/lessons/requests/fetchDeleteLesson";
import Modal from "../../../../common/components/Modal";

const ListLessonsView = () => {
  const [lessonsGroupId, setLessonsGroupId] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalSubmittingLoading, setModalSubmittingLoading] = useState(false);

  useEffect(() => {
    loadLessons();
  }, []);

  const loadLessons = () => {
    setLoading(true);
    fetchAllLessons()
      .then(([lessons]) => {
        setLessons(lessons);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCreateLessonModalSubmit = async (e: any) => {
    e.preventDefault();
    if (lessonId === "") return;
    setModalSubmittingLoading(true);
    try {
      await fetchDeleteLesson(lessonId, lessonsGroupId);
      setLessons((prevLessons) => {
        const index = prevLessons.findIndex((lesson) => lesson.id === lessonId);
        if (index !== -1) {
          return [
            ...prevLessons.slice(0, index),
            ...prevLessons.slice(index + 1),
          ];
        }
        return prevLessons;
      });
      showSuccessNotification("Группа удалена!");
      setModalVisible(false);
    } catch (e) {
      console.log(e);
      showErrorNotification("Не удалось удалить урок");
    } finally {
      setModalSubmittingLoading(false);
    }
  };

  const handleClickId = (id: string, lessonsId: string) => {
    setLessonId(id);
    setLessonsGroupId(lessonsId);
    setModalVisible(true);
  };

  return (
    <>
      <ListLessonsCards
        onClickId={(id: string, lessonsId: string) =>
          handleClickId(id, lessonsId)
        }
        lessons={lessons}
        loading={loading}
        error={error}
      />
      {modalVisible && (
        <Modal onClose={() => setModalVisible(false)} show={modalVisible}>
          Точно хотите удалить группу?
          {modalSubmittingLoading && <h3>Отправка...</h3>}
          <br />
          <button onClick={() => setModalVisible(false)}>
            Net
          </button> <br />{" "}
          <button onClick={(e) => handleCreateLessonModalSubmit(e)}>Da</button>
        </Modal>
      )}
    </>
  );
};

export default ListLessonsView;
