import { Auth } from "../../../../entities/auth";
import { AuthDto } from "../dto/auth.dto";

export const mapAuthDtoToEntity = (payload: AuthDto): Auth => ({
  accessToken: payload.accessToken,
  // expiresAt: payload.access.expires_at,

  refreshToken: payload.refreshToken,
  // expiresAt: payload.refresh.expires_at,
});
