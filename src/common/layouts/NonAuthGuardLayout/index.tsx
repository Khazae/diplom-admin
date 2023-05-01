import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectAdmin, selectAuth } from "../../../store/slices/auth";

const NonAuthGuardLayout = () => {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  const admin = useSelector(selectAdmin);

  useEffect(() => {
    if (auth && admin) {
      navigate("/");
    }
  }, [auth, admin]);

  return <Outlet />;
};

export default NonAuthGuardLayout;
