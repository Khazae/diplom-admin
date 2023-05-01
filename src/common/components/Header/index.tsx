import Icon from "../Icon";
import styles from "./styles.module.css";

interface Props {
  email?: string;
}

const Header = ({ email }: Props) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.rightContent}>
          <div className={styles.avatarContent}>
            <Icon icon="bx-user" className={styles.avatar} />
            <div>{email}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
