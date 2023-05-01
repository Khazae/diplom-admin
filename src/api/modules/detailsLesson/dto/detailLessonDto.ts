export interface DetailLessonDto {
  lessonsId: string;
  lessons: DLessonDto[];
}

interface DLessonDto {
  _id: string;
  day: string;
  lesson: string[];
}
