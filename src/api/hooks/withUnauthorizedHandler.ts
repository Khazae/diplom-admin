import { HttpStatus } from "../../common/constants/HttpStatus";
import { HttpError } from "../../common/errors/HttpError";
import { showInfoNotification } from "../../common/utils/notifications";
import router from "../../router";
import { store } from "../../store";
import { unsetAdmin, unsetAuth } from "../../store/slices/auth";


export const withUnauthorizedHandler = async <T>(request: Promise<T>) => {
  try {
    return await request;
  } catch (e) {
    const error = e as HttpError;
    if (error.status === HttpStatus.UNAUTHORIZED) {
      store.dispatch(unsetAuth());
      store.dispatch(unsetAdmin());
      router.navigate('/auth/login', { replace: true });
      showInfoNotification('Необходимо снова войти в аккаунт');
    }
  }
};
