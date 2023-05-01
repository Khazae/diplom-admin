import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../request";
import { DetailLessonDto } from "../dto/detailLessonDto";
import { mapLessonDtoToEntity } from "../mappers/mapDetailLessonDtoToEntity";

export const editLesson = async (
  lessonsId: string,
  day: string,
  lessons: string[]
) => {


  const response = await withUnauthorizedHandler(
    request.post("/api/lessons", { id: lessonsId, day, lessons })
  );

  console.log(response);

  const updateLesson = response?.data.data as DetailLessonDto;

  return [updateLesson];
};
