import { User } from "../../../../entities/user";
import { withUnauthorizedHandler } from "../../../hooks/withUnauthorizedHandler";
import request from "../../request";
import { UserDto } from "../dto/user.dto";
import { mapUserDtoToEntity } from "../mappers/mapUserDtoToEntity";

export const fetchAllUsers = async (): Promise<[User[]]> => {
  const response = await withUnauthorizedHandler(request.get("/api/users"));

  const userDtos = response?.data.data as UserDto[];

  const users = userDtos.map((userDto) => mapUserDtoToEntity(userDto));

  return [users];
};
