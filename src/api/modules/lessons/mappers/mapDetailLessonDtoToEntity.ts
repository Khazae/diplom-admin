import { DetailLessonDto } from "../dto/detailLessonDto";
import { DetailLesson } from "../../../../entities/detailLesson";

export const mapLessonDtoToEntity = (
  payload: DetailLessonDto
): DetailLesson => ({
  lessonsId: payload.lessonsId,
  lessons: payload.lessons,
});
