import { Admin } from "../../../../entities/admin";
import { AdminDto } from "../dto/admin.dto";

export const mapAdminDtoToEntity = (payload: AdminDto): Admin => ({
  // name: payload.name,
  email: payload.email,
  id: payload.id,
  isActivated: payload.isActivated,
  // createdAt: payload.created_at,
  // updatedAt: payload.updated_at,
  // deletedAt: payload.deleted_at,
});
