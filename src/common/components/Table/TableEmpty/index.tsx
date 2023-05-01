import styles from './styles.module.css';

interface Props {
  text?: string;
}

const TableEmpty = ({ text }: Props) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>{text || 'Нет данных'}</span>
    </div>
  );
};

export default TableEmpty;
