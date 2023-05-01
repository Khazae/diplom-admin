import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GeneralLayout = () => {
  return (
    <div id="general-layout">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
