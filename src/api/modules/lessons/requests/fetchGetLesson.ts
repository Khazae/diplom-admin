import { DetailLesson } from "../../../../entities/detailLesson";

import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../request";
import { DetailLessonDto } from "../dto/detailLessonDto";
import { mapLessonDtoToEntity } from "../mappers/mapDetailLessonDtoToEntity";

export const fetchGetLesson = async (
  id: string | undefined
): Promise<[DetailLesson[]]> => {
  const response = await withUnauthorizedHandler(
    request.get(`/api/groups/${id}`)
  );

  const lessonDtos = response?.data as DetailLessonDto[];

  const lesson = lessonDtos.map((lessonDto) => mapLessonDtoToEntity(lessonDto));

  return [lesson];
};
