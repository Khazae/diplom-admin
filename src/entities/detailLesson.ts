export interface DetailLesson {
  lessonsId: string;
  lessons: DLesson[];
}

interface DLesson {
  _id: string;
  day: string;
  lesson: any;
}
