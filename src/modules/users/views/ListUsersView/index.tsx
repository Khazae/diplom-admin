import { fetchAllUsers } from "../../../../api/modules/users/requests/fetchAllUsers";
import { User } from "../../../../entities/user";
import UsersTable from "../../components/UsersTable";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const ListUsersView = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    setLoading(true);
    fetchAllUsers()
      .then(([users]) => {
        setUsers(users);
        console.log(users);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.wrapper}>
      <UsersTable users={users} loading={loading} error={error} />
    </div>
  );
};

export default ListUsersView;
