import { useSelector } from "react-redux";
import SideBarLink from "./SideBarLink";
import styles from "./styles.module.css";
import { selectAdmin } from "../../../store/slices/auth";

export interface SideBarItem {
  id: number;
  name: string;
  link: string;
  superAdmin: boolean;
}

const SideBar = () => {
  const sideBarItems: SideBarItem[] = [
    {
      id: 0,
      name: "Статистика",
      link: "/",
      superAdmin: false,
    },
    {
      id: 1,
      name: "Уроки",
      link: "/lessons",
      superAdmin: false,
    },
    {
      id: 2,
      name: "Пользователи",
      link: "/users",
      superAdmin: true,
    },
  ];

  const admin = useSelector(selectAdmin);

  const elements = sideBarItems.map((item) => {
    if (item.superAdmin === admin?.isActivated || !item.superAdmin) {
      return <SideBarLink key={item.id} {...item} />;
    }
    return null;
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>Schedule Wizard</h1>
      <ul className={styles.links}>{elements}</ul>
    </div>
  );
};

export default SideBar;
