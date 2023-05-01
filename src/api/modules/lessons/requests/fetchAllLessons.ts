import { Lesson } from "../../../../entities/lesson";

import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../request";
import { LessonDto } from "../dto/lesson.dto";
import { mapLessonDtoToEntity } from "../mappers/mapLessonDtoToEntity";

export const fetchAllLessons = async (): Promise<[Lesson[]]> => {
  const response = await withUnauthorizedHandler(request.get("/api/groups"));

  const lessonDtos = response?.data as LessonDto[];

  const lessons = lessonDtos.map((lessonDto) =>
    mapLessonDtoToEntity(lessonDto)
  );

  return [lessons];
};
