import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm";
import styles from "./styles.module.css";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../../common/utils/notifications";
import { loginAdmin } from "../../../../api/modules/auth/requests/loginAdmin";
import { setAdmin, setAuth } from "../../../../store/slices/auth";
import { HttpStatus } from "../../../../common/constants/HttpStatus";
import { HttpError } from "../../../../common/errors/HttpError";

const LoginView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const [admin, auth] = await loginAdmin(email, password);

      console.log(admin);

      dispatch(setAuth(auth));
      dispatch(setAdmin(admin));

      showSuccessNotification("Успешная аутентификация");

      navigate("/");
    } catch (e) {
      const error = e as HttpError;
      console.log(error);
      switch (error.status) {
        case HttpStatus.UNAUTHORIZED:
          showErrorNotification("Неверные данные для входа");
          break;
        case HttpStatus.INTERNAL_SERVER_ERROR:
          showErrorNotification("Ошибка сервера");
          break;
        case HttpStatus.BAD_REQUEST:
          showErrorNotification("Неправильный запрос");
          break;
        case null:
          showErrorNotification("Нет соединения с сервером");
          break;
        default:
          showErrorNotification("Неизвестная ошибка");
      }
    }
    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <LoginForm loading={loading} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginView;
