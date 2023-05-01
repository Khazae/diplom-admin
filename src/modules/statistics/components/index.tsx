import NewUsers from "./NewUsers";
import Animation from "../../../common/components/Animation";
import styles from "./styles.module.css";
import Loading from "../../../common/components/Loading";

interface Props {
  newUsers: string[];
  loading: boolean;
  errors: Error | null;
}

const DashboardStatistic = ({ newUsers, loading, errors }: Props) => {
  return (
    <>
      {loading && <Loading />}
      {errors && !loading && <h2>Произошла ошибка</h2>}
      {!newUsers.length && !loading && !errors && <h2>Нет данных</h2>}
      {!errors && !loading && (
        <div className={styles.wrapper}>
          <section className={styles.box1}>
            <NewUsers newUsers={newUsers} />
          </section>

          <section className={styles.box2}>
            <NewUsers newUsers={newUsers} />
          </section>
          <section className={styles.box3}>
            <NewUsers newUsers={newUsers} />
          </section>
        </div>
      )}
    </>
  );
};

export default DashboardStatistic;
