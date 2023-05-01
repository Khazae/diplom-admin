import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailLesson } from "../../../../entities/detailLesson";
import { fetchGetLesson } from "../../../../api/modules/lessons/requests/fetchGetLesson";
import { editLesson } from "../../../../api/modules/detailsLesson/requests/editLesson";
import LessonDetailsCards from "../../components/LessonDetailsCards";
import LessonEditModal from "../../components/EditModal";

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
  }>({ day: "", lessonsId: "", lessons: [] });

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

  const handleEditLesson = async (
    day: string,
    lessonsId: string,
    lessons: string[]
  ) => {
    if (day && lessonsId && lessons && editLesson) {
      try {
        const [updateLesson] = await editLesson(lessonsId, day, lessons);
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
      const newLessons = [...prevLesson.lessons, ""];
      return { ...prevLesson, lessons: newLessons };
    });
  };

  const handleChangeEditData = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setEditData({
      ...editData,
      lessons: editData.lessons.map((l, i) =>
        i === index ? e.target.value : l
      ),
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
          <LessonDetailsCards
            key={item._id}
            day={item.day}
            lessons={item.lesson}
            onEdit={(day, lessons) => handleEditLessonModal(day, lessons)}
          />
        ))}
      {modalVisible && (
        <LessonEditModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleEditLesson}
          onAddLesson={addEmptyLesson}
          onChangeLesson={handleChangeEditData}
          day={editData.day}
          lessonsId={editData.lessonsId}
          lessons={editData.lessons}
        />

        // <Modal onClose={() => setModalVisible(false)} show={modalVisible}>
        //   Редактировать
        //   <form onSubmit={handleEditLesson}>
        //     <input type="text" value={editData?.day} disabled />
        //     {editData?.lessons.map((lesson, index) => (
        //       <input
        //         key={index}
        //         type="text"
        //         value={lesson}
        //         onChange={(e) => handleChangeEditData(e, index)}
        //       />
        //     ))}

        //     <br />
        //     <br />
        //     <br />

        //     <button type="button" onClick={addEmptyLesson}>
        //       Добавить урок
        //     </button>

        //     <button type="submit">Save</button>
        //   </form>
        // </Modal>
      )}
    </div>
  );
};

export default ListLessonDetails;
