import classNames from "classnames";
// import { getShortIdentifier } from '@/common/utils/identifier';
import styles from "./styles.module.css";
import Table from "../../../../../common/components/Table";

interface Props {
  id: string;
}

const IdColumn = ({ id }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(id);
  };

  return (
    <Table.Cell className={styles.wrapper}>
      {/* <span>{getShortIdentifier(id)}</span> */}
      <i
        className={classNames("bx bx-copy", styles.icon)}
        onClick={handleCopy}
      />
    </Table.Cell>
  );
};

export default IdColumn;
