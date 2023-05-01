import { Lesson } from "../../../../entities/lesson";
import { LessonDto } from "../dto/lesson.dto";

export const mapLessonDtoToEntity = (payload: LessonDto): Lesson => ({
  id: payload._id,
  name: payload.name,
  lessonsId: payload.lessonsId,
  startTime: payload.startTime,
  endTime: payload.endTime,
});
