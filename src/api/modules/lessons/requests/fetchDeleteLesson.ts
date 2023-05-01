import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../request";

export const fetchDeleteLesson = async (id: string, lessonsGroupId: string) => {
  const response = await withUnauthorizedHandler(
    request.delete("/api/groups", { data: { id, lessonsId: lessonsGroupId } })
  );

  const lesson = response?.data.message;

  return [lesson];
};
