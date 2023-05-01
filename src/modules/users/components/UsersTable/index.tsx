import { User } from "../../../../entities/user";
import IdColumn from "./IdColumn";
import styles from "./styles.module.css";
import BlockedAtColumn from "./BlockedAtColumn";
import EmailColumn from "./EmailColumn";
import EmailConfirmedAtColumn from "./EmailConfirmedAtColumn";
import FullNameColumn from "./FullNameColumn";
import CreatedAtColumn from "./CreatedAtColumn";
import Table from "../../../../common/components/Table";
import Animation from "../../../../common/components/Animation";

interface Props {
  users?: User[];
  loading?: boolean;
  error?: Error | null;
}

const UsersTable = ({ users = [], loading = false, error = null }: Props) => {
  return (
    <Table className={styles.wrapper}>
      <Table.Header className={styles.row}>
        <Table.Cell>ID</Table.Cell>
        {/* <Table.Cell>Имя</Table.Cell> */}
        <Table.Cell>Почта</Table.Cell>
        <Table.Cell>Доступ супер админа</Table.Cell>
        {/* <Table.Cell>Дата регистрации</Table.Cell>
          <Table.Cell>Заблокирован</Table.Cell> */}
      </Table.Header>
      {loading && <Table.Loading />}
      {error && !loading && <Table.Error />}
      {!users.length && !loading && !error && (
        <Table.Empty text="Нет пользователей" />
      )}
      {!error &&
        !loading &&
        users.map((user) => (
          <Table.Row key={user.id} className={styles.row}>
            <IdColumn id={user.id} />
            {/* <FullNameColumn
                firstName={user.firstName}
                lastName={user.lastName}
              /> */}
            <EmailColumn email={user.email} />
            <EmailConfirmedAtColumn emailConfirmedAt={user.isActivated} />
            {/* <CreatedAtColumn createdAt={user.createdAt} />
              <BlockedAtColumn blockedAt={user.blockedAt} /> */}
          </Table.Row>
        ))}
    </Table>
  );
};

export default UsersTable;
