import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectAdmin, selectAuth } from "../../../store/slices/auth";
import { showInfoNotification } from "../../utils/notifications";

const AuthGuardLayout = () => {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  const admin = useSelector(selectAdmin);

  useEffect(() => {
    if (!auth || !admin) {
      showInfoNotification("Необходимо войти в аккаунт");
      navigate("/auth/login", { replace: true });
    }
  }, [auth, admin]);

  return <Outlet />;
};

export default AuthGuardLayout;
