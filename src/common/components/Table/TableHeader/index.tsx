import classNames from 'classnames';
import TableRow from '../TableRow';
import styles from './styles.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TableHeader = ({ children, className }: Props) => {
  return (
    <TableRow className={classNames(styles.wrapper, className)}>
      {children}
    </TableRow>
  );
};

export default TableHeader;
