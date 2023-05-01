import classNames from 'classnames';
import styles from './styles.module.css';

interface Props {
  type?: 'default' | 'success' | 'error' | 'warning';
  children?: React.ReactNode;
}

const Tag = ({ type = 'success', children }: Props) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.warning]: type === 'warning',
      })}
    >
      {children}
    </div>
  );
};

export default Tag;
