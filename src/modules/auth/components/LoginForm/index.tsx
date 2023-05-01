import { FormEventHandler, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  loading?: boolean;
  onSubmit?: (values: { email: string; password: string }) => void;
}

const LoginForm = ({ loading = false, onSubmit = () => ({}) }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Авторизуйтесь</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="fieldGroup">
            <input
              className={styles.input}
              type="text"
              placeholder="email@mail.ru"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? "Loading..." : "Войти"}
          </button>
        </form>
        <div className={styles.footer}>
          <a target="_blank" href="#">
            Написать в поддержку
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
