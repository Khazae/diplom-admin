import classNames from "classnames";
import styles from "./styles.module.css";
import Table from "../../../../../common/components/Table";

interface Props {
  email: string | null;
}

const EmailColumn = ({ email }: Props) => {
  const handleCopy = () => {
    if (email) {
      navigator.clipboard.writeText(email);
    }
  };

  return (
    <Table.Cell className={styles.wrapper}>
      <span>{email}</span>
      <i
        className={classNames("bx bx-copy", styles.icon)}
        onClick={handleCopy}
      />
    </Table.Cell>
  );
};

export default EmailColumn;
