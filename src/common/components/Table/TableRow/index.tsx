import classNames from 'classnames';
import styles from './styles.module.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TableRow = ({ children, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};

export default TableRow;
