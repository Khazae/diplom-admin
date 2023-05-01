import classNames from 'classnames';
import styles from './styles.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TableCell = ({ children, className }: Props) => {
  return (
    <span className={classNames(styles.wrapper, className)}>{children}</span>
  );
};

export default TableCell;
