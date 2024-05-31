import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectorIsLoadingUsers } from "../../redux/users/selectors";
import LoadingSpiner from "../CommonComponents/Container/LoadingSpiner/LoadingSpiner";
import { selectorIsLoadingNannies } from "../../redux/nannies/selectors";

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
