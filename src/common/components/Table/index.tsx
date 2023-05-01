import classNames from "classnames";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableEmpty from "./TableEmpty";
import styles from "./styles.module.css";
import TableLoading from "./TableLoading";
import TableError from "./TableError";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Table = ({ children, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Empty = TableEmpty;
Table.Loading = TableLoading;
Table.Error = TableError;

export default Table;
