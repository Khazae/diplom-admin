import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAdmin } from "../../../store/slices/auth";
import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
import styles from "./styles.module.css";

const NavigationLayout = () => {
  const admin = useSelector(selectAdmin);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBarWrapper}>
        <SideBar />
      </div>
      <main className={styles.main}>
        <Header email={admin?.email} />
        <div className={styles.content}>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NavigationLayout;
