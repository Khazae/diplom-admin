// import { useState } from "react";
// import Modal from "../../../../common/components/Modal";
// import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import Modal from "../../../../common/components/Modal";
import styles from "./styles.module.css";
import { DetailLesson } from "../../../../entities/detailLesson";

// interface Props {
//   visible?: boolean;
//   onClose?: () => void;
//   day: string;
//   lessonsId: string;
//   lessons: any;
//   onSave: (day: string, lessonsId: string, lessons: any) => void;
//   onAddLesson: () => void;
//   onChangeLesson: (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => void;
// }

// const LessonEditForm = ({
//   lessons,
//   onSave,
//   onClose,
//   visible,
//   day,
//   lessonsId,
//   onAddLesson,
// }: Props) => {
//   const [editedLesson, setEditedLesson] = useState(lessons);

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     console.log(value);
//     const newLessons = [...editedLesson];
//     if (newLessons[index]) {
//       newLessons[index][name] = value;
//       console.log(newLessons[index][name]);
//       setEditedLesson(newLessons);
//     }
//   };

//   const handleAddLesson = (e) => {
//     e.preventDefault();
//     onSave(day, lessonsId, editedLesson);
//   };

//   // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   //   console.log(editedLesson);
//   //   onSave(day, lessonsId, editedLesson);
//   // };
//   const handleRemoveLesson = (index) => {
//     const newLessons = [...editedLesson];
//     newLessons.splice(index, 1);
//     setEditedLesson(newLessons);
//   };

//   return (
//     <Modal size="90" onClose={onClose} show={visible}>
//       <form onSubmit={handleAddLesson}>
//         {lessons.map((lesson, index) => (
//           <div key={index} className={styles.item}>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 value={lesson?.lesson || ""}
//                 name={`lesson${index}`}
//                 placeholder="Название урока"
//                 className={styles.input}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 value={lesson?.teacher || ""}
//                 name={`teacher${index}`}
//                 placeholder="Название учителя"
//                 className={styles.input}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 value={lesson?.time || ""}
//                 name={`time${index}`}
//                 placeholder="Название времени"
//                 className={styles.input}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 value={lesson?.room || ""}
//                 name={`room${index}`}
//                 placeholder="Название кабинета"
//                 className={styles.input}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>

//             <button type="button" onClick={() => handleRemoveLesson(index)}>
//               Remove
//             </button>
//           </div>
//         ))}
//         <button type="button" onClick={onAddLesson}>
//           Добавить урок
//         </button>
//         <button type="submit">Save</button>
//       </form>
//     </Modal>
//   );
// };

// export default LessonEditForm;

interface Props {
  lessons: any;
  visible: boolean;
  onCloseModal: () => void;
  onSave: (day: string, lessonsId: string, lessons: any) => void;
  day: string;
  lessonsId: string;
}

const EditModal = ({
  visible = false,
  onCloseModal,
  lessons,
  onSave,
  day,
  lessonsId,
}: Props) => {
  // Перенести логику в View
  const [lesson, setLesson] = useState(lessons);

  const handleAddLesson = (e) => {
    e.preventDefault();
    setLesson([...lesson, { lesson: "", teacher: "", time: "", room: "" }]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedLesson = lesson.map((l, i) =>
      i === index ? { ...l, [name]: value } : l
    );
    setLesson(updatedLesson);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const emptyLesson: boolean = Object.values(lesson).every(
    //   (value) => value !== ""
    // );
    onSave(day, lessonsId, lesson);
  };

  return (
    <Modal show={visible} onClose={onCloseModal}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="items">
            {lesson &&
              lesson.map((lesson, index) => (
                <div key={index}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="lesson"
                      value={lesson.lesson}
                      placeholder="Урок"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="teacher"
                      value={lesson.teacher}
                      placeholder="Учитель"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="time"
                      value={lesson.time}
                      placeholder="Время"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="room"
                      value={lesson.room}
                      placeholder="Кабинет"
                      onChange={(e) => handleChange(e, index)}
                    />
                  </div>
                </div>
              ))}
            <button type="button" onClick={(e) => handleAddLesson(e)}>
              Добавить урок
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;

// const LessonEditModal = ({
//   visible,
//   onClose,
//   day,
//   lessonsId,
//   lessons,
//   onSave,
//   onAddLesson,
//   onChangeLesson,
// }: Props) => {
//   const [editLessons, setEditLessons] = useState([]);

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     onSave(
//       day,
//       lessonsId,
//       lessons.filter((lesson) => lesson.lesson !== "")
//     );
//   };

//   const onChangeLessonEdit = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const { name, value } = e.target;
//     const updatedLessons = editLessons.map((lesson, i) => {
//       if (i === index) {
//         return {
//           ...lesson,
//           [name]: value,
//         };
//       }
//       return lesson;
//     });
//     setEditLessons(updatedLessons);
//   };

//   return (
//     <Modal size="90" onClose={onClose} show={visible}>
//       <div className={styles.content}>
//         <div>Редактировать</div>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={day} disabled />
//           <div className={styles.items}>
//             {lessons &&
//               lessons.map((lesson, index) => (
//                 <div key={index} className={styles.item}>
//                   <div className={styles.formGroup}>
//                     <input
//                       type="text"
//                       value={lesson.lesson}
//                       name="lesson"
//                       placeholder="Название урока"
//                       className={styles.input}
//                       onChange={(e) => onChangeLessonEdit(e, index)}
//                     />
//                   </div>

//                   <div className={styles.formGroup}>
//                     <input
//                       type="text"
//                       value={lesson.teacher}
//                       name="teacher"
//                       placeholder="Название учителя"
//                       className={styles.input}
//                       onChange={(e) => onChangeLessonEdit(e, index)}
//                     />
//                   </div>

//                   <div className={styles.formGroup}>
//                     <input
//                       type="text"
//                       value={lesson.time}
//                       name="time"
//                       placeholder="Название времени"
//                       className={styles.input}
//                       onChange={(e) => onChangeLessonEdit(e, index)}
//                     />
//                   </div>

//                   <div className={styles.formGroup}>
//                     <input
//                       type="text"
//                       value={lesson.room}
//                       name="room"
//                       placeholder="Название кабинета"
//                       className={styles.input}
//                       onChange={(e) => onChangeLessonEdit(e, index)}
//                     />
//                   </div>
//                 </div>
//               ))}
//           </div>
//           <button type="button" onClick={onAddLesson}>
//             Добавить урок
//           </button>
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default LessonEditModal;
