import { User } from "../../../../entities/user";
import { UserDto } from "../dto/user.dto";

export const mapUserDtoToEntity = (payload: UserDto): User => ({
  id: payload._id,
  email: payload.email,
  isActivated: payload.isActivated,
  activationLink: payload.activationLink,
});
