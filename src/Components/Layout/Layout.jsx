import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import { useSelector } from "react-redux";
import {
  selectorIsLoadingNannies,
  selectorIsLoadingUsers,
} from "../../redux/users/selectors";
import LoadingSpiner from "../CommonComponents/Container/LoadingSpiner/LoadingSpiner";

function Layout() {
  const isLoadingUsers = useSelector(selectorIsLoadingUsers);
  const isLoadingNannies = useSelector(selectorIsLoadingNannies);
  return (
    <div className={style.layout}>
      <Suspense fallback={<LoadingSpiner />}>
        <Outlet />
      </Suspense>
      {(isLoadingUsers || isLoadingNannies) && <LoadingSpiner />}
    </div>
  );
}

export default Layout;
