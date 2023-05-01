import { Admin } from "../../../../entities/admin";
import { Auth } from "../../../../entities/auth";
import request from "../../request";
import { mapAdminDtoToEntity } from "../mappers/mapAdminDtoToEntity";
import { mapAuthDtoToEntity } from "../mappers/mapAuthDtoToEntity";

export const loginAdmin = async (
  email: string,
  password: string
): Promise<[Admin, Auth]> => {
  const response = await request.post("/api/login", {
    email,
    password,
  });

  const adminDto = response.data.admin;
  const authDto = response.data.auth;

  return [mapAdminDtoToEntity(adminDto), mapAuthDtoToEntity(authDto)];
};
