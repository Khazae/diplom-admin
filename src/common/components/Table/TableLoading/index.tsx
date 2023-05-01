import styles from './styles.module.css';

const TableLoading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default TableLoading;
